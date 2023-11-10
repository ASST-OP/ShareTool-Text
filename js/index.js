
if (!localStorage.getItem("visited")) {
    Swal.fire({
        title: "ツールの説明",
        text: "テキストの数では共有したい文字の種類を入れてください
その後テキストを作成して頂き
出てきたテキストボックスに
共有したい文字を入れてください
※左から順に共有されます
その後共有する間隔を入力してください(1000=1秒です)
全ての設定が終わったら
半自動共有開始を押してください
止める時は共有停止を押してください",
        icon: "question"
      });
    localStorage.setItem("visited", "1")
}

let redirectTimer;
let textInputs = [];
let redirectCount = 0;

document.getElementById("createInputsButton").addEventListener("click", function () {
    const textCount = parseInt(document.getElementById("textCount").value);
    if (textCount > 0) {
        const inputsDiv = document.getElementById("inputs");
        inputsDiv.innerHTML = ''; // 既存の入力をクリア

        for (let i = 0; i < textCount; i++) {
            const textInput = document.createElement("input");
            textInput.type = "text";
            textInput.placeholder = `テキスト ${i + 1}`;
            textInputs.push(textInput);
            inputsDiv.appendChild(textInput);
        }
    } else {
        alert("テキストの数は正の整数で指定してください.");
    }
});

document.getElementById("startRedirectButton").addEventListener("click", function () {
    const redirectInterval = parseInt(document.getElementById("redirectInterval").value);

    if (redirectInterval > 0) {
        if (textInputs.length > 0) {
            alert("リダイレクトが開始しました.");
            redirectTimer = setInterval(function () {
                for (let i = 0; i < textInputs.length; i++) {
                    const textInput = textInputs[i];
                    const customText = textInput.value;

                    if (customText) {
                        const encodedText = encodeURIComponent(customText);
                        const finalRedirectLink = `line://share?text=${encodedText}`;
                        window.location.href = finalRedirectLink;
                        redirectCount++;
                        updateRedirectCount();
                    }
                }
            }, redirectInterval);
        } else {
            alert("テキストを作成してください.");
        }
    } else {
        alert("リダイレクト間隔は正の値で指定してください.");
    }
});

document.getElementById("stopRedirectButton").addEventListener("click", function () {
    clearInterval(redirectTimer);
    alert("リダイレクトが停止しました.");
});

// リダイレクト回数を表示
function updateRedirectCount() {
    const redirectCountInfo = document.getElementById("redirectCountInfo");
    redirectCountInfo.textContent = `リダイレクト回数: ${redirectCount}`;
}

// リダイレクト回数を初期化
updateRedirectCount();
<!DOCTYPE html>
<html>
<head>
    <title>リダイレクト</title>
</head>
<body>
    <input type="number" id="textCount" placeholder="テキストの数">
    <button id="createTextInputsButton">テキストを作成</button>
    <div id="textInputs"></div>
    <input type="number" id="redirectInterval" placeholder="リダイレクト間隔（ミリ秒）">
    <button id="startRedirectButton">リダイレクト開始</button>
    <button id="stopRedirectButton">リダイレクト停止</button>

    <script>
        let redirectTimer;
        let textInputs = [];
        let currentTextIndex = 0;

        document.getElementById("createTextInputsButton").addEventListener("click", function() {
            const textCount = parseInt(document.getElementById("textCount").value);
            if (textCount > 0) {
                const textInputsDiv = document.getElementById("textInputs");
                textInputsDiv.innerHTML = ''; // 既存のテキスト入力をクリア

                for (let i = 0; i < textCount; i++) {
                    const textInput = document.createElement("input");
                    textInput.type = "text";
                    textInput.placeholder = `テキスト ${i + 1}`;
                    textInputsDiv.appendChild(textInput);
                    textInputs.push(textInput);
                }
            } else {
                alert("テキストの数は正の整数で指定してください。");
            }
        });

        document.getElementById("startRedirectButton").addEventListener("click", function() {
            const redirectInterval = parseInt(document.getElementById("redirectInterval").value);

            if (redirectInterval > 0) {
                if (textInputs.length > 0) {
                    redirectTimer = setInterval(function() {
                        const currentTextInput = textInputs[currentTextIndex];
                        const customText = currentTextInput.value;

                        if (customText) {
                            const encodedText = encodeURIComponent(customText);
                            const finalRedirectLink = `line://share?text=${encodedText}`;
                            window.location.href = finalRedirectLink;

                            currentTextIndex = (currentTextIndex + 1) % textInputs.length;
                        }
                    }, redirectInterval);
                } else {
                    alert("テキストを作成してください。");
                }
            } else {
                alert("リダイレクト間隔は正の値で指定してください。");
            }
        });

        document.getElementById("stopRedirectButton").addEventListener("click", function() {
            clearInterval(redirectTimer);
            alert("リダイレクトが停止しました。");
        });
    </script>
</body>
</html>

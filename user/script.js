// 現在のURLからユーザー名を取得
const path = window.location.pathname; // e.g., /user/username
const userName = path.split('/')[2]; // "username"

// APIのURLを組み立て
const apiURL = `https://api.hatena-scratch/user/${userName}`;

// 要素を取得
const usernameElement = document.getElementById("username");
const profileElement = document.getElementById("profile");

// APIからデータを取得して表示
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("データの取得に失敗しました");
        }
        return response.json();
    })
    .then(data => {
        usernameElement.textContent = data.username || "データなし";
        profileElement.textContent = data.profile || "データなし";
    })
    .catch(error => {
        usernameElement.textContent = "エラー";
        profileElement.textContent = "エラー";
        console.error("エラー:", error);
    });

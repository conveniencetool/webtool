async function expandUrl() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '展開中...';

    try {
        const response = await fetch(url, { method: 'HEAD', redirect: 'follow' });
        const finalUrl = response.url;
        resultDiv.innerHTML = `<strong>展開されたURL:</strong> ${finalUrl}`;
    } catch (error) {
        resultDiv.innerHTML = '短縮URLの展開に失敗しました。URLを確認してください。';
    }
}

function analyzeUrl() {
    const url = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    try {
        const parsedUrl = new URL(url);
        const protocol = parsedUrl.protocol;
        const host = parsedUrl.host;
        const path = parsedUrl.pathname;
        const params = Array.from(parsedUrl.searchParams).map(
            ([key, value]) => `${key}: ${value}`
        );

        resultDiv.innerHTML = `
            <strong>プロトコル:</strong> ${protocol}<br>
            <strong>ホスト:</strong> ${host}<br>
            <strong>パス:</strong> ${path}<br>
            <strong>クエリパラメータ:</strong><br>${params.length ? params.join('<br>') : 'なし'}
        `;
    } catch (error) {
        resultDiv.innerHTML = '無効なURLです。正しい形式で入力してください。';
    }
}


(function () {
    chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
        if (sender.skey) {
            filter(skey);
        }
    });

    // 过滤书架信息
    function filter(skey = '') {
        const books = document.querySelectorAll('#routerView > div.shelf_list > a');
        skey = skey.toLowerCase();
        if (!skey) {
            // 输入为空则显示所有书籍
            for (const book of books) {
                book.style.display = '';
            }
            return;
        }

        for (const book of books) {
            book.style.display = (book.children[1]?.textContent.toLowerCase().includes(skey)) ? '' : 'none';
        }
    }

    function init() {
        // 初始化,在页面中添加一个输入框, 按回车时检索
        search = document.createElement('input');
        search.placeholder = '输入书名并按回车搜索书架上的书籍';
        search.className = 'navBar_input';
        search.style.marginTop = '10px';
        search.style.marginBottom = '-20px';
        search.onkeydown = e => {
            if (e.keyCode == '13') {
                // 按了回车键
                filter(search.value);
            }
        }
        search.onchange = e => {
            // 输入框已清空,显示所有书籍
            if (!search.value) {
                filter();
            }
        }

        document.querySelector('#routerView').insertBefore(search, document.querySelector('#routerView > div.shelf_header'))
    }

    init();
})()
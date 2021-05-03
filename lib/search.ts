import config from '../config.json';

// 过滤书架信息

/**
 * 过滤书架上的书籍,匹配skey的就显示
 * @param skey 搜索词, 忽略大小写
 * @returns 
 */
function filter(skey = '') {
    const books: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(config.books);
    skey = skey.toLowerCase();
    if (!skey) {
        // 输入为空则显示所有书籍
        for (let i = 0; i < books.length; i++) {
            books[i].style.display = '';
        }
        return;
    }

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        book.style.display = (book?.children[1]?.textContent?.toLowerCase().includes(skey)) ? '' : 'none';
    }
}

/**
 * 在页面中添加搜索框
 */
function addSearchBtn() {
    // 初始化,在页面中添加一个输入框, 按回车时检索
    const search: HTMLInputElement = document.createElement('input');
    search.placeholder = '输入书名并按回车搜索书架上的书籍';
    search.className = 'navBar_input';
    search.style.marginTop = '10px';
    search.style.marginBottom = '-20px';
    search.onkeydown = e => {
        if (e.code === "Enter") {
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

    document.querySelector('#routerView')?.insertBefore(search, document.querySelector('#routerView > div.shelf_header'))
}

function run() {
    addSearchBtn();
}

export default {
    run,
    name: 'search',
} as pluginType;
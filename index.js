// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase()
document.write("name: " + name + "<br/>")


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';

function up(str) {
    let arr = new Array()
    arr = str.split(" ")
    let newstr = ""
    newstr = arr.reduce(function (total, cur) {
        cur = cur.charAt(0).toUpperCase() + cur.substr(1) + " "
        return total += cur
    }, "")
    console.log(newstr)
    return newstr
}
document.write("sentence: " + up(sentence) + "<br/>")

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
function pick(str) {
    let reg = /\d+/
    let find = ""
    find = str.match(reg);
    return find;
}

document.write("money num: " + pick(money));

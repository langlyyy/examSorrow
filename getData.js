/**
 * 获取深大作业数据的前端程序逻辑
 * 注意：必须是已完成的，可以获取到题目以及对应的答案
 * 作业页面默认引入了 jQuery
 * 所以本程序使用 jQuery 获取页面数据
 * 需要使用 Chrome 浏览器，打开 devTools
 */
var allEl = $('.queContainer')

var allData = []

$.each(allEl, (key, item) => {
    var index = $.trim($(item).find('.index').text()).replace('.', '') // 获取题目序列号 - 即是第几题
    var title = $.trim($(item).find('.ti-q-c').text()) // 获取题目标题
    var list = $(item).find('.ti-a') // 获取选项列表对象
    var listData = [] // 存储选项列表数据
    var answer = $.trim($(item).find('.answerBox-content').eq(1).text()).split(' ')
    $.each(list, (index, sub) =>{
        listData.push({
            index: $.trim($(sub).find('.ti-a-i').text()).replace('.', ''),
            text: $.trim($(sub).find('.ti-a-c').text())
        })
    })

    allData.push({
        index,
        title,
        listData,
        answer
    })
    
})

console.log(JSON.stringify(allData))

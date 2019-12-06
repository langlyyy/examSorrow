/**
 * 自动填充答案
 * 注意：需要优先定义 data 数据对象, 可以从 .json 文件中复制对应的内容
 * 作业页面默认引入了 jQuery
 * 所以本程序使用 jQuery 获取页面数据
 * 需要使用 Chrome 浏览器，打开 devTools
 */
var allEl = $('.queContainer')
$.each(allEl, (key, item) => {
    setTimeout(function () {
        ;(function (key, item) {
            
                var title = $.trim($(item).find('.ti-q-c').text()) // 获取题目标题
                var list = $(item).find('.ti-a') // 获取选项列表对象
                var listData = [] // 存储选项列表数据

                var obj = data.find(item => item.title === title)
                var answers = obj.listData.filter(val => {
                    return obj.answer.includes(val.index)
                })

                $.each(list, (index, sub) =>{
                    let ti = $.trim($(sub).find('.ti-a-c').text())

                    answers.forEach(answer => {
                        if(answer.text === ti) {
                            $(sub).find('input').click()

                            console.log(`第${obj.index}题：${obj.title}`)
                            console.log(`选择答案成功：${answer.text}`)
                            console.log('===============分隔线=================\n')
                        }
                    })
                })
            
        })(key, item)
    }, key * 1000)
})


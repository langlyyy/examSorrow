## 作用
- 自动选择对应作业的答案，快速高效的抄作业

## 使用方法
- 使用 `Chrome` 浏览器打开优课在线网站，打开需要完成的作业，比如：数据库管理系统 - 作业三
- 对着页面空白处点击鼠标右键，再点击菜单栏内的`检查`，即可打开 `Chrome` 开发者工具，或者点击键盘 `F12`，也可以打开
- 点击开发者工具的 `Console` 标签，这里的界面可以输入代码
- 转到文件夹 - 打开对应的作业答案，比如：数据库管理系统 > 作业三.json，全选，复制
- 在 `Chrome Devtools` 的 `Console` 标签内，输入 `var data = `，然后粘贴刚才复制的数据，再点击键盘的 `Enter` 键
- 再次转到文件夹，打开 `setData.js` 文件，全选，复制，粘贴到浏览器的 `Console` 栏，再点击键盘的 `Enter` 键，这时候程式就会开始自动完成答案的填充操作，并打印出选择的题目以及答案信息，具体可以查看操作 `GIF` 图
 
![示例图片](./public/images/example.gif)

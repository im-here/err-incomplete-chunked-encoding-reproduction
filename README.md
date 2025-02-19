a minimal reproduction for "net::ERR_INCOMPLETE_CHUNKED_ENCODING 200 (OK)"

## 复现步骤
1.运行后端程序（backend目录）
2.运行前端程序（frontend目录）
3.浏览器打开http://localhost:5173/
4.反复刷新浏览器
* 成功：成功获取5000条数据
* 失败：浏览器弹窗，并提示 Network Error
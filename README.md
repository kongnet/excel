# excel

JavaScript realizes all functions of Excel 2016

#### 安装

- npm i jsxls

- Typescript 在 ts 分支 由 **[imsunhao](https://github.com/imsunhao)** 提供维护

#### 需要的辅助工具

- npm i -g jest // 测试框架
- npm i -g jsdoc // 文档生成框架

#### 测试和函数注解的规范

```javascript
/**
 * [参考资料](https://support.microsoft.com/zh-cn/office/abs-%e5%87%bd%e6%95%b0-3420200f-5628-4e8c-99da-c99d7c87713c?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60072&ui=zh-cn&rs=zh-cn&ad=cn)
 * @desc 返回数字的绝对值。 一个数字的绝对值是该数字不带其符号的形式
 * @param {Number} n
 * @example
 * math.abs(-1)
 * => 1
 * @returns {Number}
 * @memberof MATH#
 */
const abs = () => Math.abs(n)
```

#### 参与方式

- 有写至少 10 个及以上函数的能力，不包括数学和统计类
- 通过后成为合作者，直接维护此库

| 项目       | 个数 |
| ---------- | ---- |
| 日期和时间 | 24   |
| 工程       | 54   |
| 逻辑       | 9    |
| 文本       | 42   |
| 网络       | 3    |
| 信息       | 21   |
| 数据库     | 12   |
| 查找与引用 | 19   |
| 财务       | 55   |
| 数学       | 76   |
| 多维数据集 | 7    |
| 统计       | 107  |
| ==小计==   | 429  |

#### 完成情况

- 完成率:18.8 %

[完成情况列表 跳转会比较慢](https://htmlpreview.github.io/?https://github.com/kongnet/excel/blob/master/excel-list.html)

#### 文件说明

- node function-list.js 自动生成完成列表

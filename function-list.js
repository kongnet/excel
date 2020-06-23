/*
完成excel2016全部函数计划...
*/
const $ = require('meeko')
const fs = require('fs')
const path = require('path')
const completeObj = $.requireAll({ dirname: path.join(__dirname, './lib') })
let $E = {}
let DATE = [
  {
    class: '日期和时间',
    desc: 'DATE 函数返回表示特定日期的连续序列号<br>语法：DATE(year,month,day)',
    url:
      'https://support.microsoft.com/zh-cn/office/date-%e5%87%bd%e6%95%b0-e36c0c8c-4104-49da-ab83-82328b832349?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60113&ui=zh-cn&rs=zh-cn&ad=cn',
    fName: 'DATE'
  },
  { class: '日期和时间', desc: '--', url: '--', fName: 'DATEVALUE' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'DAY' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'DAYS' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'DAYS360' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'EDATE' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'EOMONTH' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'HOUR' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'MINUTE' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'ISOWEEKNUM' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'MONTH' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'NETWORKDAYS' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'NETWORKDAYS.INTL' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'NOW' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'SECOND' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'TIME' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'TIMEVALUE' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'TODAY' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'WEEKDAY' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'YEAR' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'WEEKNUM' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'WORKDAY' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'WORKDAY.INTL' },
  { class: '日期和时间', desc: '--', url: '--', fName: 'YEARFRAC' }
]
let ENGINEERING = [
  { class: '工程', desc: '--', url: '--', fName: 'BESSELI' },
  { class: '工程', desc: '--', url: '--', fName: 'BESSELJ' },
  { class: '工程', desc: '--', url: '--', fName: 'BESSELK' },
  { class: '工程', desc: '--', url: '--', fName: 'BESSELY' },
  { class: '工程', desc: '--', url: '--', fName: 'BIN2DEC' },
  { class: '工程', desc: '--', url: '--', fName: 'BIN2HEX' },
  { class: '工程', desc: '--', url: '--', fName: 'BIN2OCT' },
  { class: '工程', desc: '--', url: '--', fName: 'BITAND' },
  { class: '工程', desc: '--', url: '--', fName: 'BITLSHIFT' },
  { class: '工程', desc: '--', url: '--', fName: 'BITOR' },
  { class: '工程', desc: '--', url: '--', fName: 'BITRSHIFT' },
  { class: '工程', desc: '--', url: '--', fName: 'BITXOR' },
  { class: '工程', desc: '--', url: '--', fName: 'COMPLEX' },
  { class: '工程', desc: '--', url: '--', fName: 'CONVERT' },
  { class: '工程', desc: '--', url: '--', fName: 'DEC2BIN' },
  { class: '工程', desc: '--', url: '--', fName: 'DEC2HEX' },
  { class: '工程', desc: '--', url: '--', fName: 'DEC2OCT' },
  { class: '工程', desc: '--', url: '--', fName: 'DELTA' },
  { class: '工程', desc: '--', url: '--', fName: 'ERF' },
  { class: '工程', desc: '--', url: '--', fName: 'ERF.PRECISE' },
  { class: '工程', desc: '--', url: '--', fName: 'ERFC' },
  { class: '工程', desc: '--', url: '--', fName: 'ERFC.PRECISE' },
  { class: '工程', desc: '--', url: '--', fName: 'GESTEP' },
  { class: '工程', desc: '--', url: '--', fName: 'HEX2BIN' },
  { class: '工程', desc: '--', url: '--', fName: 'HEX2DEC' },
  { class: '工程', desc: '--', url: '--', fName: 'HEX2OCT' },
  { class: '工程', desc: '--', url: '--', fName: 'IMABS' },
  { class: '工程', desc: '--', url: '--', fName: 'IMAGINARY' },
  { class: '工程', desc: '--', url: '--', fName: 'IMARGUMENT' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCONJUGATE' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCOS' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCOSH' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCOT' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCSC' },
  { class: '工程', desc: '--', url: '--', fName: 'IMCSCH' },
  { class: '工程', desc: '--', url: '--', fName: 'IMDIV' },
  { class: '工程', desc: '--', url: '--', fName: 'IMEXP' },
  { class: '工程', desc: '--', url: '--', fName: 'IMLN' },
  { class: '工程', desc: '--', url: '--', fName: 'IMLOG10' },
  { class: '工程', desc: '--', url: '--', fName: 'IMLOG2' },
  { class: '工程', desc: '--', url: '--', fName: 'IMPOWER' },
  { class: '工程', desc: '--', url: '--', fName: 'IMPRODUCT' },
  { class: '工程', desc: '--', url: '--', fName: 'IMREAL' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSEC' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSECH' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSIN' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSINH' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSQRT' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSUB' },
  { class: '工程', desc: '--', url: '--', fName: 'IMSUM' },
  { class: '工程', desc: '--', url: '--', fName: 'IMTAN' },
  { class: '工程', desc: '--', url: '--', fName: 'OCT2BIN' },
  { class: '工程', desc: '--', url: '--', fName: 'OCT2DEC' },
  { class: '工程', desc: '--', url: '--', fName: 'OCT2HEX' }
]
let LOGICAL = [
  { class: '逻辑', desc: '--', url: '--', fName: 'AND' },
  { class: '逻辑', desc: '--', url: '--', fName: 'FALSE' },
  { class: '逻辑', desc: '--', url: '--', fName: 'IF' },
  { class: '逻辑', desc: '--', url: '--', fName: 'IFERROR' },
  { class: '逻辑', desc: '--', url: '--', fName: 'IFNA' },
  { class: '逻辑', desc: '--', url: '--', fName: 'NOT' },
  { class: '逻辑', desc: '--', url: '--', fName: 'OR' },
  { class: '逻辑', desc: '--', url: '--', fName: 'TRUE' },
  { class: '逻辑', desc: '--', url: '--', fName: 'XOR' }
]
let TEXT = [
  { class: '文本', desc: '--', url: '--', fName: 'ASC' },
  { class: '文本', desc: '--', url: '--', fName: 'BAHTTEXT' },
  { class: '文本', desc: '--', url: '--', fName: 'CHAR' },
  { class: '文本', desc: '--', url: '--', fName: 'CLEAN' },
  { class: '文本', desc: '--', url: '--', fName: 'CODE' },
  { class: '文本', desc: '--', url: '--', fName: 'CONCATENATE' },
  { class: '文本', desc: '--', url: '--', fName: 'DOLLAR' },
  { class: '文本', desc: '--', url: '--', fName: 'EXACT' },
  { class: '文本', desc: '--', url: '--', fName: 'FIND' },
  { class: '文本', desc: '--', url: '--', fName: 'FINDB' },
  { class: '文本', desc: '--', url: '--', fName: 'FIXED' },
  { class: '文本', desc: '--', url: '--', fName: 'LEFT' },
  { class: '文本', desc: '--', url: '--', fName: 'LEFTB' },
  { class: '文本', desc: '--', url: '--', fName: 'LEN' },
  { class: '文本', desc: '--', url: '--', fName: 'LENB' },
  { class: '文本', desc: '--', url: '--', fName: 'LOWER' },
  { class: '文本', desc: '--', url: '--', fName: 'MID' },
  { class: '文本', desc: '--', url: '--', fName: 'MIDB' },
  { class: '文本', desc: '--', url: '--', fName: 'NUMBERVALUE' },
  { class: '文本', desc: '--', url: '--', fName: 'PROPER' },
  { class: '文本', desc: '--', url: '--', fName: 'REGEXEXTRACT' },
  { class: '文本', desc: '--', url: '--', fName: 'REGEXMATCH' },
  { class: '文本', desc: '--', url: '--', fName: 'REGEXREPLACE' },
  { class: '文本', desc: '--', url: '--', fName: 'REPLACE' },
  { class: '文本', desc: '--', url: '--', fName: 'REPLACEB' },
  { class: '文本', desc: '--', url: '--', fName: 'REPT' },
  { class: '文本', desc: '--', url: '--', fName: 'RIGHT' },
  { class: '文本', desc: '--', url: '--', fName: 'RIGHTB' },
  { class: '文本', desc: '--', url: '--', fName: 'RMB' },
  { class: '文本', desc: '--', url: '--', fName: 'ROMAN' },
  { class: '文本', desc: '--', url: '--', fName: 'SEARCH' },
  { class: '文本', desc: '--', url: '--', fName: 'SEARCHB' },
  { class: '文本', desc: '--', url: '--', fName: 'SPLIT' },
  { class: '文本', desc: '--', url: '--', fName: 'SUBSTITUTE' },
  { class: '文本', desc: '--', url: '--', fName: 'T' },
  { class: '文本', desc: '--', url: '--', fName: 'TEXT' },
  { class: '文本', desc: '--', url: '--', fName: 'TRIM' },
  { class: '文本', desc: '--', url: '--', fName: 'UNICHAR' },
  { class: '文本', desc: '--', url: '--', fName: 'UNICODE' },
  { class: '文本', desc: '--', url: '--', fName: 'UPPER' },
  { class: '文本', desc: '--', url: '--', fName: 'VALUE' },
  { class: '文本', desc: '--', url: '--', fName: 'WIDECHAR' }
]
let WEB = [
  { class: '网络', desc: '--', url: '--', fName: 'ENCODEURL' },
  { class: '网络', desc: '--', url: '--', fName: 'FILTERXML' },
  { class: '网络', desc: '--', url: '--', fName: 'WEBSERVICE' }
]
let CUBE = [
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBEKPIMEMBER' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBEMEMBER' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBEMEMBERPROPERTY' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBERANDEDMEMBER' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBESET' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBESETCOUNT' },
  { class: '多维数据集', desc: '--', url: '--', fName: 'CUBEVALUE' }
]
let INFO = [
  { class: '信息', desc: '--', url: '--', fName: 'CELL' },
  { class: '信息', desc: '--', url: '--', fName: 'ERROR.TYPE' },
  { class: '信息', desc: '--', url: '--', fName: 'INFO' },
  { class: '信息', desc: '--', url: '--', fName: 'ISBLANK' },
  { class: '信息', desc: '--', url: '--', fName: 'ISERR' },
  { class: '信息', desc: '--', url: '--', fName: 'ISERROR' },
  { class: '信息', desc: '--', url: '--', fName: 'ISEVEN' },
  { class: '信息', desc: '--', url: '--', fName: 'ISFORMULA' },
  { class: '信息', desc: '--', url: '--', fName: 'ISLOGICAL' },
  { class: '信息', desc: '--', url: '--', fName: 'ISNA' },
  { class: '信息', desc: '--', url: '--', fName: 'ISNONTEXT' },
  { class: '信息', desc: '--', url: '--', fName: 'ISNUMBER' },
  { class: '信息', desc: '--', url: '--', fName: 'ISODD' },
  { class: '信息', desc: '--', url: '--', fName: 'ISREF' },
  { class: '信息', desc: '--', url: '--', fName: 'ISTEXT' },
  { class: '信息', desc: '--', url: '--', fName: 'N' },
  { class: '信息', desc: '--', url: '--', fName: 'NA' },
  { class: '信息', desc: '--', url: '--', fName: 'PHONETIC' },
  { class: '信息', desc: '--', url: '--', fName: 'SHEET' },
  { class: '信息', desc: '--', url: '--', fName: 'SHEETS' },
  { class: '信息', desc: '--', url: '--', fName: 'TYPE' }
]
let DATABASE = [
  { class: '数据库', desc: '--', url: '--', fName: 'DAVERAGE' },
  { class: '数据库', desc: '--', url: '--', fName: 'DCOUNT' },
  { class: '数据库', desc: '--', url: '--', fName: 'DCOUNTA' },
  { class: '数据库', desc: '--', url: '--', fName: 'DGET' },
  { class: '数据库', desc: '--', url: '--', fName: 'DMAX' },
  { class: '数据库', desc: '--', url: '--', fName: 'DMIN' },
  { class: '数据库', desc: '--', url: '--', fName: 'DPRODUCT' },
  { class: '数据库', desc: '--', url: '--', fName: 'DSTDEV' },
  { class: '数据库', desc: '--', url: '--', fName: 'DSTDEVP' },
  { class: '数据库', desc: '--', url: '--', fName: 'DSUM' },
  { class: '数据库', desc: '--', url: '--', fName: 'DVAR' },
  { class: '数据库', desc: '--', url: '--', fName: 'DVARP' }
]
let SEARCHREF = [
  { class: '查找与引用', desc: '--', url: '--', fName: 'ADDRESS' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'AREAS' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'CHOOSE' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'COLUMN' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'COLUMNS' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'FORMULATEXT' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'GETPIVOTDATA' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'HLOOKUP' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'HYPERLINK' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'INDEX' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'INDIRECT' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'LOOKUP' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'MATCH' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'OFFSET' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'ROW' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'ROWS' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'RTD' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'TRANSPOSE' },
  { class: '查找与引用', desc: '--', url: '--', fName: 'VLOOKUP' }
]
let FINANCIAL = [
  { class: '财务', desc: '--', url: '--', fName: 'ACCRINT' },
  { class: '财务', desc: '--', url: '--', fName: 'ACCRINTM' },
  { class: '财务', desc: '--', url: '--', fName: 'AMORDEGRC' },
  { class: '财务', desc: '--', url: '--', fName: 'AMORLINC' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPDAYBS' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPDAYS' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPDAYSNC' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPNCD' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPNUM' },
  { class: '财务', desc: '--', url: '--', fName: 'COUPPCD' },
  { class: '财务', desc: '--', url: '--', fName: 'CUMIPMT' },
  { class: '财务', desc: '--', url: '--', fName: 'CUMPRINC' },
  { class: '财务', desc: '--', url: '--', fName: 'DB' },
  { class: '财务', desc: '--', url: '--', fName: 'DDB' },
  { class: '财务', desc: '--', url: '--', fName: 'DISC' },
  { class: '财务', desc: '--', url: '--', fName: 'DOLLARDE' },
  { class: '财务', desc: '--', url: '--', fName: 'DOLLARFR' },
  { class: '财务', desc: '--', url: '--', fName: 'DURATION' },
  { class: '财务', desc: '--', url: '--', fName: 'EFFECT' },
  { class: '财务', desc: '--', url: '--', fName: 'FV' },
  { class: '财务', desc: '--', url: '--', fName: 'FVSCHEDULE' },
  { class: '财务', desc: '--', url: '--', fName: 'INTRATE' },
  { class: '财务', desc: '--', url: '--', fName: 'IPMT' },
  { class: '财务', desc: '--', url: '--', fName: 'IRR' },
  { class: '财务', desc: '--', url: '--', fName: 'ISPMT' },
  { class: '财务', desc: '--', url: '--', fName: 'MDURATION' },
  { class: '财务', desc: '--', url: '--', fName: 'MIRR' },
  { class: '财务', desc: '--', url: '--', fName: 'NOMINAL' },
  { class: '财务', desc: '--', url: '--', fName: 'NPER' },
  { class: '财务', desc: '--', url: '--', fName: 'NPV' },
  { class: '财务', desc: '--', url: '--', fName: 'ODDFPRICE' },
  { class: '财务', desc: '--', url: '--', fName: 'ODDFYIELD' },
  { class: '财务', desc: '--', url: '--', fName: 'ODDLPRICE' },
  { class: '财务', desc: '--', url: '--', fName: 'ODDLYIELD' },
  { class: '财务', desc: '--', url: '--', fName: 'PDURATION' },
  { class: '财务', desc: '--', url: '--', fName: 'PMT' },
  { class: '财务', desc: '--', url: '--', fName: 'PPMT' },
  { class: '财务', desc: '--', url: '--', fName: 'PRICE' },
  { class: '财务', desc: '--', url: '--', fName: 'PRICEDISC' },
  { class: '财务', desc: '--', url: '--', fName: 'PRICEMAT' },
  { class: '财务', desc: '--', url: '--', fName: 'PV' },
  { class: '财务', desc: '--', url: '--', fName: 'RATE' },
  { class: '财务', desc: '--', url: '--', fName: 'RECEIVED' },
  { class: '财务', desc: '--', url: '--', fName: 'RRI' },
  { class: '财务', desc: '--', url: '--', fName: 'SLN' },
  { class: '财务', desc: '--', url: '--', fName: 'SYD' },
  { class: '财务', desc: '--', url: '--', fName: 'TBILLEQ' },
  { class: '财务', desc: '--', url: '--', fName: 'TBILLPRICE' },
  { class: '财务', desc: '--', url: '--', fName: 'TRILLYIELD' },
  { class: '财务', desc: '--', url: '--', fName: 'VDB' },
  { class: '财务', desc: '--', url: '--', fName: 'XIRR' },
  { class: '财务', desc: '--', url: '--', fName: 'XNPV' },
  { class: '财务', desc: '--', url: '--', fName: 'YIELD' },
  { class: '财务', desc: '--', url: '--', fName: 'YIELDDISC' },
  { class: '财务', desc: '--', url: '--', fName: 'YIELDMAT' }
]
let MATH = [
  {
    class: '数学',
    desc: '返回数字的绝对值。 一个数字的绝对值是该数字不带其符号的形式',
    url:
      'https://support.microsoft.com/zh-cn/office/abs-%e5%87%bd%e6%95%b0-3420200f-5628-4e8c-99da-c99d7c87713c?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60072&ui=zh-cn&rs=zh-cn&ad=cn',
    fName: 'ABS'
  },
  {
    class: '数学',
    desc:
      '返回数字的反余弦值。 反余弦值是指余弦值为 number 的角度。 返回的角度以弧度表示，弧度值在 0（零）到 pi 之间。',
    url:
      'https://support.microsoft.com/zh-cn/office/acos-%e5%87%bd%e6%95%b0-cb73173f-d089-4582-afa1-76e5524b5d5b?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60147&ui=zh-cn&rs=zh-cn&ad=cn',
    fName: 'ACOS'
  },
  {
    class: '数学',
    desc:
      '返回数字的反双曲余弦值。 该数字必须大于或等于 1。 反双曲余弦值是指双曲余弦值为 number 的值，因此 ACOSH(COSH(number)) 等于 number。<br>Number    必需。 大于或等于 1 的任意实数。',
    url:
      'https://support.microsoft.com/zh-cn/office/acosh-%e5%87%bd%e6%95%b0-e3992cc1-103f-4e72-9f04-624b9ef5ebfe?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60281&ui=zh-cn&rs=zh-cn&ad=cn',
    fName: 'ACOSH'
  },
  {
    class: '数学',
    desc:
      '返回数字的反余切值的主值。<br>Number    必需。 Number 为所需角度的余切值。 此值必须是实数。',
    url:
      'https://support.microsoft.com/zh-cn/office/acot-%E5%87%BD%E6%95%B0-dc7e5008-fe6b-402e-bdd6-2eea8383d905',
    fName: 'ACOT'
  },
  {
    class: '数学',
    desc:
      '返回数字的反双曲余切值。<br>Number    必需。 Number 的绝对值必须大于 1。',
    url:
      'https://support.microsoft.com/zh-cn/office/acoth-%e5%87%bd%e6%95%b0-cc49480f-f684-4171-9fc5-73e4e852300f?ns=excel&version=16&syslcid=2052&uilcid=2052&appver=zxl160&helpid=xlmain11.chm60597&ui=zh-cn&rs=zh-cn&ad=cn',
    fName: 'ACOTH'
  },
  { class: '数学', desc: '--', url: '--', fName: 'AGGREGATE' },
  { class: '数学', desc: '--', url: '--', fName: 'ARABIC' },
  { class: '数学', desc: '--', url: '--', fName: 'ASIN' },
  { class: '数学', desc: '--', url: '--', fName: 'ASINH' },
  { class: '数学', desc: '--', url: '--', fName: 'ATAN' },
  { class: '数学', desc: '--', url: '--', fName: 'ATAN2' },
  { class: '数学', desc: '--', url: '--', fName: 'ATANH' },
  { class: '数学', desc: '--', url: '--', fName: 'BASE' },
  { class: '数学', desc: '--', url: '--', fName: 'CEILING.MATH' },
  { class: '数学', desc: '--', url: '--', fName: 'COMBIN' },
  { class: '数学', desc: '--', url: '--', fName: 'COMBINA' },
  { class: '数学', desc: '--', url: '--', fName: 'COS' },
  { class: '数学', desc: '--', url: '--', fName: 'COSH' },
  { class: '数学', desc: '--', url: '--', fName: 'COT' },
  { class: '数学', desc: '--', url: '--', fName: 'COTH' },
  { class: '数学', desc: '--', url: '--', fName: 'CSC' },
  { class: '数学', desc: '--', url: '--', fName: 'CSCH' },
  { class: '数学', desc: '--', url: '--', fName: 'DECIMAL' },
  { class: '数学', desc: '--', url: '--', fName: 'DEGREES' },
  { class: '数学', desc: '--', url: '--', fName: 'EVEN' },
  { class: '数学', desc: '--', url: '--', fName: 'EXP' },
  { class: '数学', desc: '--', url: '--', fName: 'FACT' },
  { class: '数学', desc: '--', url: '--', fName: 'FACTDOUBLE' },
  { class: '数学', desc: '--', url: '--', fName: 'FLOOR' },
  { class: '数学', desc: '--', url: '--', fName: 'FLOOR.MATH' },
  { class: '数学', desc: '--', url: '--', fName: 'FLOORPRECISE' },
  { class: '数学', desc: '--', url: '--', fName: 'GCD' },
  { class: '数学', desc: '--', url: '--', fName: 'INT' },
  { class: '数学', desc: '--', url: '--', fName: 'LCM' },
  { class: '数学', desc: '--', url: '--', fName: 'LN' },
  { class: '数学', desc: '--', url: '--', fName: 'LOG' },
  { class: '数学', desc: '--', url: '--', fName: 'LOG10' },
  { class: '数学', desc: '--', url: '--', fName: 'MDETERM' },
  { class: '数学', desc: '--', url: '--', fName: 'MINVERSE' },
  { class: '数学', desc: '--', url: '--', fName: 'MMULT' },
  { class: '数学', desc: '--', url: '--', fName: 'MOD' },
  { class: '数学', desc: '--', url: '--', fName: 'MROUND' },
  { class: '数学', desc: '--', url: '--', fName: 'MULTINOMIAL' },
  { class: '数学', desc: '--', url: '--', fName: 'MUNT' },
  { class: '数学', desc: '--', url: '--', fName: 'ODD' },
  { class: '数学', desc: '--', url: '--', fName: 'PI' },
  { class: '数学', desc: '--', url: '--', fName: 'POWER' },
  { class: '数学', desc: '--', url: '--', fName: 'PRODUCT' },
  { class: '数学', desc: '--', url: '--', fName: 'QUOTIENT' },
  { class: '数学', desc: '--', url: '--', fName: 'RADIANS' },
  { class: '数学', desc: '--', url: '--', fName: 'RAND' },
  { class: '数学', desc: '--', url: '--', fName: 'RANDBETWEEN' },
  { class: '数学', desc: '--', url: '--', fName: 'ROMAN' },
  { class: '数学', desc: '--', url: '--', fName: 'ROUND' },
  { class: '数学', desc: '--', url: '--', fName: 'ROUNDDOWN' },
  { class: '数学', desc: '--', url: '--', fName: 'ROUNDUP' },
  { class: '数学', desc: '--', url: '--', fName: 'SEC' },
  { class: '数学', desc: '--', url: '--', fName: 'SECH' },
  { class: '数学', desc: '--', url: '--', fName: 'SERIESSUM' },
  { class: '数学', desc: '--', url: '--', fName: 'SIGN' },
  { class: '数学', desc: '--', url: '--', fName: 'SIN' },
  { class: '数学', desc: '--', url: '--', fName: 'SINH' },
  { class: '数学', desc: '--', url: '--', fName: 'SQRT' },
  { class: '数学', desc: '--', url: '--', fName: 'SQRTPI' },
  { class: '数学', desc: '--', url: '--', fName: 'SUBTOTAL' },
  { class: '数学', desc: '--', url: '--', fName: 'SUM' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMIF' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMIFS' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMPRODUCT' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMSQ' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMX2MY2' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMX2PY2' },
  { class: '数学', desc: '--', url: '--', fName: 'SUMXMY2' },
  { class: '数学', desc: '--', url: '--', fName: 'TAN' },
  { class: '数学', desc: '--', url: '--', fName: 'TANH' },
  { class: '数学', desc: '--', url: '--', fName: 'TRUNC' }
]
let STATISTICAL = [
  { class: '统计', desc: '--', url: '--', fName: 'AVEDEV' },
  { class: '统计', desc: '--', url: '--', fName: 'AVERAGE' },
  { class: '统计', desc: '--', url: '--', fName: 'AVERAGEA' },
  { class: '统计', desc: '--', url: '--', fName: 'AVERAGEIF' },
  { class: '统计', desc: '--', url: '--', fName: 'AVERAGEIFS' },
  { class: '统计', desc: '--', url: '--', fName: 'BETA.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'BETA.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'BINOM.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'BINOM.DIST.RANGE' },
  { class: '统计', desc: '--', url: '--', fName: 'BINOM.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'CHISQ.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'CHISQ.DIST.RT' },
  { class: '统计', desc: '--', url: '--', fName: 'CHISQ.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'CHISQ.INV.RT' },
  { class: '统计', desc: '--', url: '--', fName: 'CHISQ.TEST' },
  { class: '统计', desc: '--', url: '--', fName: 'CONFIDENCE.NORM' },
  { class: '统计', desc: '--', url: '--', fName: 'CONFIDENCE.T' },
  { class: '统计', desc: '--', url: '--', fName: 'CORREL' },
  { class: '统计', desc: '--', url: '--', fName: 'COUNT' },
  { class: '统计', desc: '--', url: '--', fName: 'COUNTA' },
  { class: '统计', desc: '--', url: '--', fName: 'COUNTBLANK' },
  { class: '统计', desc: '--', url: '--', fName: 'COUNTIF' },
  { class: '统计', desc: '--', url: '--', fName: 'COUNTIFS' },
  { class: '统计', desc: '--', url: '--', fName: 'COVARIANCE.P' },
  { class: '统计', desc: '--', url: '--', fName: 'COVARIANCE.S' },
  { class: '统计', desc: '--', url: '--', fName: 'DEVSQ' },
  { class: '统计', desc: '--', url: '--', fName: 'EXPON.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'F.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'F.DIST.RT' },
  { class: '统计', desc: '--', url: '--', fName: 'F.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'F.INV.RT' },
  { class: '统计', desc: '--', url: '--', fName: 'F.TEST' },
  { class: '统计', desc: '--', url: '--', fName: 'FISHER' },
  { class: '统计', desc: '--', url: '--', fName: 'FISHERINV' },
  { class: '统计', desc: '--', url: '--', fName: 'FORECAST.ETS' },
  { class: '统计', desc: '--', url: '--', fName: 'FORECAST.ETS.CONFINT' },
  { class: '统计', desc: '--', url: '--', fName: 'FORECAST.ETS.SEASONALITY' },
  { class: '统计', desc: '--', url: '--', fName: 'FORECAST.ETS.STAT' },
  { class: '统计', desc: '--', url: '--', fName: 'FORECAST.LINEAR' },
  { class: '统计', desc: '--', url: '--', fName: 'FREQUENCY' },
  { class: '统计', desc: '--', url: '--', fName: 'GAMMA' },
  { class: '统计', desc: '--', url: '--', fName: 'GAMMA.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'GAMMA.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'GAMMALN' },
  { class: '统计', desc: '--', url: '--', fName: 'GAMMALN.PRECISE' },
  { class: '统计', desc: '--', url: '--', fName: 'GAUSS' },
  { class: '统计', desc: '--', url: '--', fName: 'GEOMEAN' },
  { class: '统计', desc: '--', url: '--', fName: 'GROWTH' },
  { class: '统计', desc: '--', url: '--', fName: 'HARMEAN' },
  { class: '统计', desc: '--', url: '--', fName: 'HYPGEOM.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'INTERCEPT' },
  { class: '统计', desc: '--', url: '--', fName: 'KURT' },
  { class: '统计', desc: '--', url: '--', fName: 'LARGE' },
  { class: '统计', desc: '--', url: '--', fName: 'LINEST' },
  { class: '统计', desc: '--', url: '--', fName: 'LOGNORM.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'LOGNORM.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'MAX' },
  { class: '统计', desc: '--', url: '--', fName: 'MAXA' },
  { class: '统计', desc: '--', url: '--', fName: 'MEDIAN' },
  { class: '统计', desc: '--', url: '--', fName: 'MIN' },
  { class: '统计', desc: '--', url: '--', fName: 'MINA' },
  { class: '统计', desc: '--', url: '--', fName: 'MODE.MULT' },
  { class: '统计', desc: '--', url: '--', fName: 'MODE.SNGL' },
  { class: '统计', desc: '--', url: '--', fName: 'NEGBINOM.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'NORM.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'NORM.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'NORM.S.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'NORM.S.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'PEARSON' },
  { class: '统计', desc: '--', url: '--', fName: 'PERCENTILE.EXC' },
  { class: '统计', desc: '--', url: '--', fName: 'PERCENTILE.INC' },
  { class: '统计', desc: '--', url: '--', fName: 'PERCENTRANK.EXC' },
  { class: '统计', desc: '--', url: '--', fName: 'PERCENTRANK.INC' },
  { class: '统计', desc: '--', url: '--', fName: 'PERMUT' },
  { class: '统计', desc: '--', url: '--', fName: 'PERMUTATIONA' },
  { class: '统计', desc: '--', url: '--', fName: 'PHI' },
  { class: '统计', desc: '--', url: '--', fName: 'POISSONDIST' },
  { class: '统计', desc: '--', url: '--', fName: 'PROB' },
  { class: '统计', desc: '--', url: '--', fName: 'QUARTILE.EXC' },
  { class: '统计', desc: '--', url: '--', fName: 'QUARTILE.INC' },
  { class: '统计', desc: '--', url: '--', fName: 'RANK.AVG' },
  { class: '统计', desc: '--', url: '--', fName: 'RANK.EQ' },
  { class: '统计', desc: '--', url: '--', fName: 'RSQ' },
  { class: '统计', desc: '--', url: '--', fName: 'SKEW' },
  { class: '统计', desc: '--', url: '--', fName: 'SKEW.P' },
  { class: '统计', desc: '--', url: '--', fName: 'SLOPE' },
  { class: '统计', desc: '--', url: '--', fName: 'SMALL' },
  { class: '统计', desc: '--', url: '--', fName: 'STANDARDIZE' },
  { class: '统计', desc: '--', url: '--', fName: 'STDEVA' },
  { class: '统计', desc: '--', url: '--', fName: 'STDEV.P' },
  { class: '统计', desc: '--', url: '--', fName: 'STDEVPA' },
  { class: '统计', desc: '--', url: '--', fName: 'STDEV.S' },
  { class: '统计', desc: '--', url: '--', fName: 'STEYX' },
  { class: '统计', desc: '--', url: '--', fName: 'T.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'T.DIST.2T' },
  { class: '统计', desc: '--', url: '--', fName: 'T.DIST.RT' },
  { class: '统计', desc: '--', url: '--', fName: 'T.INV' },
  { class: '统计', desc: '--', url: '--', fName: 'T.INV.2T' },
  { class: '统计', desc: '--', url: '--', fName: 'T.TEST' },
  { class: '统计', desc: '--', url: '--', fName: 'TREND' },
  { class: '统计', desc: '--', url: '--', fName: 'TRIMMEAN' },
  { class: '统计', desc: '--', url: '--', fName: 'VARA' },
  { class: '统计', desc: '--', url: '--', fName: 'VAR.P' },
  { class: '统计', desc: '--', url: '--', fName: 'VARPA' },
  { class: '统计', desc: '--', url: '--', fName: 'VAR.S' },
  { class: '统计', desc: '--', url: '--', fName: 'WEIBULL.DIST' },
  { class: '统计', desc: '--', url: '--', fName: 'Z.TEST' }
]
$E.DATE = DATE
$E.ENGINEERING = ENGINEERING
$E.LOGICAL = LOGICAL
$E.TEXT = TEXT
$E.WEB = WEB
$E.INFO = INFO
$E.DATABASE = DATABASE
$E.SEARCHREF = SEARCHREF
$E.FINANCIAL = FINANCIAL
$E.MATH = MATH
$E.CUBE = CUBE
$E.STATISTICAL = STATISTICAL

let arr = []
let obj = []
for (let i in $E) {
  let a = ($E[i][0].class + ',')
    .repeat($E[i].length)
    .split(',')
    .filter(Boolean)
  arr.push(...a)
}
let arrCountObj = arr.count()
let sum = 0
for (let i in arrCountObj) {
  obj.push({ text: i, count: arrCountObj[i] })
  sum += +arrCountObj[i]
}
obj.push({ text: '==小计==', count: sum })
$.drawTable(obj)

let itemArr = []
let funCount = 0
let funCompleted = 0
for (let i in $E) {
  let a = $E[i].map(x => {
    funCount++
    let b =
      typeof $.tools.objByString(
        completeObj,
        `${i.toLowerCase()}.${x.fName.toLowerCase()}`
      ) === 'function'
    if (b) funCompleted++
    return [
      x.fName,
      x.desc,
      `<a href="${x.url}">${x.fName}</a>`,
      b ? '完成' : '否',
      x.note || '--'
    ]
  })

  let r = $.tools.genTemp.gridTable(
    [
      {
        dataTitleArr: ['函数名', '描述', '链接', '是否完成', '备注'],
        dataArr: a,
        dataTitle: $E[i][0].class
      }
    ],
    '',
    true
  )
  itemArr.push(r)
}

fs.writeFileSync(
  'excel-list.html',
  $.tools.genTemp.genHtml(
    'EXCEL 2016 函数',
    'EXCEL 2016 函数 完成率:' +
      (((funCompleted / funCount) * 1000) | 0) / 10 +
      '%' +
      itemArr.join('\n')
  )
)

async function main () {}
main()
console.log((((funCompleted / funCount) * 1000) | 0) / 10, '%')

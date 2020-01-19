module.exports = {
  processors: [],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  extends: "stylelint-config-standard", // 这是官方推荐的方式
  rules: { 
    // 这里自定义规则
    // 可参考官方：https://stylelint.docschina.org/user-guide/rules/
    // 属性排序规则: https://github.com/constverum/stylelint-config-rational-order
    "order/properties-order": [],
    "plugin/rational-order": [true, {
      "border-in-box-model": true,
      "empty-line-between-groups": false,
    }]
  }
};
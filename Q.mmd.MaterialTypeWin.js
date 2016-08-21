/**
 * Created by Mique on 2016/8/21.
 */
Ext.ns("Q.mmd");

Q.mmd.MaterialTypeWin = function (config) {
    var win = this;
    config = config || {};
    Ext.applyIf(config, {
        dealUrl: path + "/mmd/material/MaterialType",
        title: '物料类型'
    });
    var formPanel = this.formPanel = this.createFormPanel();
    config = Ext.apply({
        width: 500,
        height: 140,
        layout: "border",
        item: [formPanel]
    }, config);
};
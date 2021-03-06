/**
 * @name	Warning
 * @package	core.lang
 * @desc	警告
 * @type	类
 * 
 * @date	2016年9月8日 10:20:53
 */

/**
 * 构造函数
 * 
 * @param _this{object}
 *            警告对象
 */
core.lang.Warning = function(_this) {

	// 警告信息
	var message = [];
	// 遍历参数
	for (var i = 1; i < arguments.length; i++) {

		// 添加输出信息
		message.push(arguments[i]);
	}

	// 打印信息
	if (window.console && window.console.warn) {

		window.console.warn(message.join(" "));
		window.console.warn(_this);
	}
};
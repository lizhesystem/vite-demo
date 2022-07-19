import { ElNotification } from "element-plus";

/**
 * @description 接收数据流生成blob，创建链接，下载文件
 * @param {string} url 导出表格的api地址(必传)
 * @param {string} tempName 导出的文件名(必传)
 * @param {object} params 导出的参数(默认为空对象)
 * @param {boolean} isNotify 是否有导出消息提示(默认为false)
 * @param {string} fileType 导出的文件格式(默认为.xlsx)
 * @return void
 * */
export const useDownload = async (
	url: (params: any) => Promise<any>,
	tempName: string,
	params: object = {},
	isNotify: boolean = true,
	fileType: string = ".xls"
) => {
	/**
	 * 由生成的链接下载模板
	 * @param {string} blobUrl 二进制流地址(必传)
	 */
	const download = (blobUrl: string) => {
		const exportFile = document.createElement("a");
		exportFile.style.display = "none";
		exportFile.download = `${tempName}${fileType}`;
		exportFile.href = blobUrl;
		document.body.appendChild(exportFile);
		exportFile.click();
		// 去除下载对url的影响
		document.body.removeChild(exportFile);
		window.URL.revokeObjectURL(blobUrl);
	};

	if (isNotify) {
		ElNotification({
			title: "温馨提示",
			message: "如果数据庞大会导致下载缓慢哦，请您耐心等待！",
			type: "info",
			duration: 3000
		});
	}
	try {
		const res = await url(params);
		// 这个地方的type,经测试不传也没事，因为zip文件不知道type是什么
		// const blob = new Blob([res], {
		// 	type: "application/vnd.ms-excel;charset=UTF-8"
		// });
		const blob = new Blob([res]);
		// 兼容edge不支持createObjectURL方法
		// @ts-ignore
		if ("msSaveOrOpenBlob" in navigator) return window.navigator.msSaveOrOpenBlob(blob, tempName + fileType);
		const blobUrl = window.URL.createObjectURL(blob);
		download(blobUrl);
	} catch (error) {
		console.log(error);
	}
};

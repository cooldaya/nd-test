import { generate, HttpClient } from "openapi-typescript-codegen";
import projectConfig from "./src/project-config.js";
import fs from "node:fs";

/**
 * @param {Object} options 配置选项
 * @param {string} options.input Swagger JSON 的 URL 或文件路径
 * @param {string} options.output 输出目录
 * @param {HttpClient} options.httpClient HTTP 客户端类型
 * @param {boolean} options.enableDev 是否在开发模式下启用
 * @param {boolean} options.enableBuild 是否在构建模式下启用
 * @param {Object} options.generateOptions 额外的生成选项
 */
async function swaggerApiGenPlugin(options = {}) {
  // 默认配置
  const {
    input = projectConfig.swaggerUrl,
    output = "./src/apis/swagger-apis",
    httpClient = HttpClient.AXIOS,
    generateOptions = {},
  } = options;

  // 生成 API 代码的通用函数
  const generateApi = async (mode) => {
    try {
      console.log(`🚀 ${mode}模式：开始生成 API 代码...`);
      console.log(`📡 输入源: ${input}`);
      console.log(`📁 输出目录: ${output}`);

      // 判断是否有core文件夹，有则不生成
      const corePath = `${output}/core`;
      let coreExists = false;

      try {
        await fs.promises.access(corePath, fs.constants.F_OK);
        coreExists = true;
      } catch (error) {
        coreExists = false;
      }

      const innerGenerateOptions = {
        input,
        output,
        httpClient,
        useOptions: true,
        useUnionTypes: true,
        exportServices: true,
        exportModels: true,
        exportSchemas: true,
        exportCore: !coreExists,
        ...generateOptions,
      };
      await generate(innerGenerateOptions);

      console.log("✅ API 代码生成完成！");
    } catch (error) {
      console.error("❌ API 代码生成失败:", error.message);
      if (error.stack) {
        console.error("错误详情:", error.stack);
      }
    }
  };
  await generateApi("开发");
}

swaggerApiGenPlugin();

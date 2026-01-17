module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.module.rules.forEach((rule) => {
                if (rule.oneOf) {
                    rule.oneOf.forEach((oneOfRule) => {
                        if (oneOfRule.use && Array.isArray(oneOfRule.use)) {
                            oneOfRule.use.forEach((loader) => {
                                if (
                                    loader.loader &&
                                    loader.loader.includes("source-map-loader")
                                ) {
                                    oneOfRule.exclude = oneOfRule.exclude || [];
                                    oneOfRule.exclude.push(
                                        /node_modules\/lucide-react/,
                                    );
                                }
                            });
                        }
                    });
                }
            });
            return webpackConfig;
        },
    },
};

# 背景
xxx
# 

## freshness
Freshness（新鲜度） 是 TypeScript 专为 对象字面量 设计的一套严格多余属性检查（Excess Property Checks）机制，核心目的是防止你在赋值或传参时，意外传入目标类型根本不存在的属性，避免拼写错误和无效数据流入函数，参考[Freshness PR](https://github.com/Microsoft/TypeScript/pull/3823)


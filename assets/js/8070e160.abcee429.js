"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[3822],{191:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});const l=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"Apache OpenDAL\u2122 can be easily integrated into different software with its Rust core and multilingual bindings.","source":"@site/docs/quickstart.md","sourceDirName":".","slug":"/quickstart","permalink":"/quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/opendal/tree/main/website/docs/quickstart.md","tags":[],"version":"current","lastUpdatedBy":"Xuanwo","lastUpdatedAt":1731561327000,"sidebarPosition":3,"frontMatter":{"title":"Quickstart","sidebar_position":3},"sidebar":"docs","previous":{"title":"Vision","permalink":"/vision"},"next":{"title":"Rust Core","permalink":"/rust-core"}}');var i=a(6070),t=a(5658);const o={title:"Quickstart",sidebar_position:3},s=void 0,d={},r=[{value:"Rust core",id:"rust-core",level:2},{value:"Install",id:"install",level:3},{value:"Demo",id:"demo",level:3},{value:"Java binding",id:"java-binding",level:2},{value:"Install",id:"install-1",level:3},{value:"Maven",id:"maven",level:4},{value:"Gradle",id:"gradle",level:4},{value:"Classified library",id:"classified-library",level:4},{value:"Demo",id:"demo-1",level:3},{value:"Python binding",id:"python-binding",level:2},{value:"Install",id:"install-2",level:3},{value:"Demo",id:"demo-2",level:3},{value:"Node.js binding",id:"nodejs-binding",level:2},{value:"Install",id:"install-3",level:3},{value:"Demo",id:"demo-3",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Apache OpenDAL\u2122 can be easily integrated into different software with its Rust core and multilingual bindings."}),"\n",(0,i.jsx)(n.h2,{id:"rust-core",children:"Rust core"}),"\n",(0,i.jsx)(n.p,{children:"OpenDAL's core is implemented in Rust programming language. The most convenient way to use OpenDAL in your Rust program add the OpenDAL Cargo crate as a dependency."}),"\n",(0,i.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,i.jsx)(n.p,{children:"Run the following Cargo command in your project directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cargo add opendal\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or add the following line to your Cargo.toml:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'opendal = "0.46.0"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"demo",children:"Demo"}),"\n",(0,i.jsx)(n.p,{children:"Try it out:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'use opendal::Result;\nuse opendal::layers::LoggingLayer;\nuse opendal::services;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Pick a builder and configure it.\n    let mut builder = services::S3::default();\n    builder.bucket("test");\n\n    // Init an operator\n    let op = Operator::new(builder)?\n        // Init with logging layer enabled.\n        .layer(LoggingLayer::default())\n        .finish();\n\n    // Write data\n    op.write("hello.txt", "Hello, World!").await?;\n\n    // Read data\n    let bs = op.read("hello.txt").await?;\n\n    // Fetch metadata\n    let meta = op.stat("hello.txt").await?;\n    let mode = meta.mode();\n    let length = meta.content_length();\n\n    // Delete\n    op.delete("hello.txt").await?;\n\n    Ok(())\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"java-binding",children:"Java binding"}),"\n",(0,i.jsxs)(n.p,{children:["OpenDAL's Java binding is released to Maven central as ",(0,i.jsx)(n.a,{href:"https://central.sonatype.com/artifact/org.apache.opendal/opendal-java",children:(0,i.jsx)(n.code,{children:"org.apache.opendal:opendal-java:${version}"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-1",children:"Install"}),"\n",(0,i.jsx)(n.h4,{id:"maven",children:"Maven"}),"\n",(0,i.jsxs)(n.p,{children:["Generally, you can first add the ",(0,i.jsx)(n.code,{children:"os-maven-plugin"})," for automatically detect the classifier based on your platform:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<build>\n<extensions>\n  <extension>\n    <groupId>kr.motd.maven</groupId>\n    <artifactId>os-maven-plugin</artifactId>\n    <version>1.7.0</version>\n  </extension>\n</extensions>\n</build>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then add the dependency to opendal-java as following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependencies>\n<dependency>\n  <groupId>org.apache.opendal</groupId>\n  <artifactId>opendal-java</artifactId>\n  <version>${opendal.version}</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.opendal</groupId>\n  <artifactId>opendal-java</artifactId>\n  <version>${opendal.version}</version>\n  <classifier>${os.detected.classifier}</classifier>\n</dependency>\n</dependencies>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"gradle",children:"Gradle"}),"\n",(0,i.jsxs)(n.p,{children:["For Gradle, you can first add the ",(0,i.jsx)(n.code,{children:"com.google.osdetector"})," for automatically detect the classifier based on your platform:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'plugins {\n    id "com.google.osdetector" version "1.7.3"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Then add the dependency to opendal-java as following:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'dependencies {\n    implementation "org.apache.opendal:opendal-java:$opendal.version"\n    implementation "org.apache.opendal:opendal-java:$opendal.version:$osdetector.classifier"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"classified-library",children:"Classified library"}),"\n",(0,i.jsxs)(n.p,{children:["For details on specifying a classified library,\nread the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/opendal/tree/main/bindings/java",children:"dedicated explanation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"demo-1",children:"Demo"}),"\n",(0,i.jsx)(n.p,{children:"Try it out:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// Configure service\nfinal Map<String, String> conf = new HashMap<>();\nconf.put("root", "/tmp");\n// Construct operator\nfinal Operator op = Operator.of("fs", conf);\n// Write data\nop.write("hello.txt", "Hello, World!").join();\n// Read data\nfinal byte[] bs = op.read("hello.txt").join();\n// Delete\nop.delete("hello.txt").join();\n'})}),"\n",(0,i.jsx)(n.h2,{id:"python-binding",children:"Python binding"}),"\n",(0,i.jsxs)(n.p,{children:["OpenDAL's Python binding is released to PyPI repository as ",(0,i.jsx)(n.a,{href:"https://pypi.org/project/opendal/",children:(0,i.jsx)(n.code,{children:"opendal"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-2",children:"Install"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command to install ",(0,i.jsx)(n.code,{children:"opendal"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"pip install opendal\n"})}),"\n",(0,i.jsx)(n.h3,{id:"demo-2",children:"Demo"}),"\n",(0,i.jsx)(n.p,{children:"Try it out:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import opendal\nimport asyncio\n\nasync def main():\n    op = opendal.AsyncOperator("fs", root="/tmp")\n    await op.write("test.txt", b"Hello World")\n    print(await op.read("test.txt"))\n\nasyncio.run(main())\n'})}),"\n",(0,i.jsx)(n.h2,{id:"nodejs-binding",children:"Node.js binding"}),"\n",(0,i.jsxs)(n.p,{children:["OpenDAL's Node.js binding is released to NPM registry as ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/opendal",children:(0,i.jsx)(n.code,{children:"opendal"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"install-3",children:"Install"}),"\n",(0,i.jsxs)(n.p,{children:["Run the following command to install ",(0,i.jsx)(n.code,{children:"opendal"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"npm install opendal\n"})}),"\n",(0,i.jsx)(n.h3,{id:"demo-3",children:"Demo"}),"\n",(0,i.jsx)(n.p,{children:"Try it out:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("fs", { root: "/tmp" });\n  await op.write("test", "Hello, World!");\n  const bs = await op.read("test");\n  console.log(new TextDecoder().decode(bs));\n  const meta = await op.stat("test");\n  console.log(`contentLength: ${meta.contentLength}`);\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5658:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var l=a(758);const i={},t=l.createContext(i);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);
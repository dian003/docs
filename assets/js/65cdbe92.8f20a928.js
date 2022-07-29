(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[86],{69215:function(e,t,i){"use strict";i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var n=i(87462),o=i(63366),a=(i(67294),i(3905)),r=i(93456),s=["components"],l={sidebar_position:6},c="OKP4 Ecosystem",h={unversionedId:"whitepaper/okp4-ecosystem",id:"whitepaper/okp4-ecosystem",title:"OKP4 Ecosystem",description:"Overview",source:"@site/docs/whitepaper/okp4-ecosystem.mdx",sourceDirName:"whitepaper",slug:"/whitepaper/okp4-ecosystem",permalink:"/docs/whitepaper/okp4-ecosystem",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/okp4-ecosystem.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"whitepaperSidebar",previous:{title:"OKP4 Blockchain",permalink:"/docs/whitepaper/okp4-blockchain"},next:{title:"Data Spaces",permalink:"/docs/whitepaper/data-spaces"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Decentralized Orchestration / Workflow Engine",id:"decentralized-orchestration--workflow-engine",level:2},{value:"The Workflow Engine",id:"the-workflow-engine",level:3},{value:"The knowledge graph",id:"the-knowledge-graph",level:3},{value:"The workflow",id:"the-workflow",level:3},{value:"The decentralization of orchestration",id:"the-decentralization-of-orchestration",level:3},{value:"Data / Algorithms",id:"data--algorithms",level:2},{value:"Storage, computation",id:"storage-computation",level:2},{value:"Mechanisms to connect/disconnect",id:"mechanisms-to-connectdisconnect",level:2},{value:"Datasets / algorithms / resource governance \u2013 sovereignty",id:"datasets--algorithms--resource-governance--sovereignty",level:2},{value:"Security &amp; Risks",id:"security--risks",level:2}],u={toc:p};function k(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"okp4-ecosystem"},"OKP4 Ecosystem"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"OKP4 is a general-purpose Ecosystem that enables ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/As_a_service"},"XaaS")," - Anything as a Service. Therein lies the extensibility and versatility of the Protocol. Anything that is presented to the Protocol ",(0,a.kt)("em",{parentName:"p"},"as a Service")," can then be used by the Protocol. In a Data Space, services are not hosted centrally but anywhere (in the cloud or in premise), from any provider and are only shared when necessary according to strict rules."),(0,a.kt)("p",null,"There is a large possible typology of services and the Protocol currently recognizes the following types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Data")," as a Service - Services allowing data management: storage, accessibility, administration..."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Algorithm")," as a Service - Services that process data to produce meaningful information (i.e. knowledge), for instance: machine learning algorithms"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Infrastructure")," as a Service - Services that offers computation, storage and networking resources")),(0,a.kt)("p",null,"The Ecosystem is based on a fully decentralized open and agnostic architecture, which is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Scalable"),", designed to scale to infinity"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Interoperable")," to ensure integration with existing and future services"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Auditable"),", by the fine description of the topology of the Ecosystem, by the recording in an ontology of all the activities")),(0,a.kt)("h2",{id:"decentralized-orchestration--workflow-engine"},"Decentralized Orchestration / Workflow Engine"),(0,a.kt)("h3",{id:"the-workflow-engine"},"The Workflow Engine"),(0,a.kt)("p",null,"The Workflow Engine is a special service of the Protocol which orchestrates the invocations of other services. It is a reflex component of the Ecosystem that listens to the transactions of the blockchain and is triggered on command, when a particular transaction of execution request is registered in the blockchain."),(0,a.kt)("p",null,"The following diagram describes the different possible interactions during the execution of a workflow with a single service."),(0,a.kt)(r.Mermaid,{config:{},chart:"sequenceDiagram\n    autonumber\n    actor A as Alice\n    participant O as OKP4 blockchain\n    participant W as Workflow Engine\n    participant S as Service\n    par\n        A-)O: tx: execute-workflow(params)\n    and processing loop\n        loop\n            W->>O: query next tx\n            O--\x3e>W: tx\n            alt tx is execute-workflow\n                W->>O: retrieve service metadata\n                O--\x3e>W: service metadata\n                W-)O: tx: report-workflow-state\n                W->>W: process service\n                W->>S: call service(params)\n                S--\x3e>W: result\n                W-)O: tx: report-workflow-state\n            else\n            end\n        end\n    end\n    \n",mdxType:"Mermaid"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(1) - The use case starts with the submission of a transaction requesting to execute a workflow."),(0,a.kt)("li",{parentName:"ul"},"(2) & (3) - In parallel, the Workflow Engine regularly queries the blockchain to retrieve the latest validated transactions."),(0,a.kt)("li",{parentName:"ul"},"(4) & (5) - If the transaction is a request to execute a workflow, the Workflow Engine retrieves the metadata describing the service to invoke. For simplicity, we consider here that the invoked workflow consists of a single service."),(0,a.kt)("li",{parentName:"ul"},"(6) - Before invoking the service, the Workflow Engine records a status transaction in the blockchain. This information is important because it helps to ensure that the contract established between the customer and the various suppliers (data, services, infrastructure, etc.) is honored."),(0,a.kt)("li",{parentName:"ul"},"(7), (8) & (9) - Based on the service metadata, the Workflow Engine is able to call the service."),(0,a.kt)("li",{parentName:"ul"},"(10) - After invoking the service, the Workflow Engine records a status transaction (success, failure) in the blockchain.")),(0,a.kt)("h3",{id:"the-knowledge-graph"},"The knowledge graph"),(0,a.kt)("p",null,"All the different activities of the Workflow Engine, and especially the invocations of the services, are recorded in the blockchain, with all the necessary context for an complete understanding."),(0,a.kt)("p",null,"Since all the information is expressed in the form of an ontology, the Workflow Engine enables the chain of custody of each piece of data (",(0,a.kt)("em",{parentName:"p"},"what"),") during the different processings (",(0,a.kt)("em",{parentName:"p"},"how"),") operated on the different locations (",(0,a.kt)("em",{parentName:"p"},"where"),") at a given time (",(0,a.kt)("em",{parentName:"p"},"when"),"), which leads to a knowledge graph from the source data to the final knowledge produced. Moreover, based on this knowledge graph, monetary policies can be applied in order to reward all the actors in the workflow, from Data Providers to Service Providers, in accordance with the business model stated in the Data Space."),(0,a.kt)("h3",{id:"the-workflow"},"The workflow"),(0,a.kt)("p",null,"A workflow is a (standardized) description of a processing flow using existing services. It is understood that a workflow can be reduced to the use of a single service, in which case the processing is just the invocation of that service."),(0,a.kt)("p",null,"The services registered in the Catalog in the Protocol are described as a workflow using a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-specific_language"},"Domain Specific Language")," that allows the execution of the interaction between the Workflow Engine and the described service with great flexibility. In this sense, the Protocol service descriptions, at runtime, act as a broker to the target services, an intermediary that performs Protocol adaptation and translation between the Workflow Engine and the invoked services."),(0,a.kt)("h3",{id:"the-decentralization-of-orchestration"},"The decentralization of orchestration"),(0,a.kt)("p",null,"Decentralization comes first and foremost through the Protocol's ability to bring into play services of all kinds, hosted anywhere. It is also possible to have the same services (or services offering a similar set of features) deployed in several places (cloud or in premise), which reinforces the distributed aspect. The Workflow Engine itself obeys the same principles and can therefore exist in different deployments in the cloud. In this case, the selection of the Workflow Engine instance can be done according to different strategies that can be decided at the Data Space level and/or at the level of the user running the workflow."),(0,a.kt)("p",null,"Secondly, decentralization is also achieved by the ability of the Protocol to be agnostic: indeed, each service can be described by any language and thus interpreted by any Workflow Engine. By this principle, it is possible to have services invocable by different Workflow Engines."),(0,a.kt)("h2",{id:"data--algorithms"},"Data / Algorithms"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Work in progress")),(0,a.kt)("h2",{id:"storage-computation"},"Storage, computation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Work in progress")),(0,a.kt)("h2",{id:"mechanisms-to-connectdisconnect"},"Mechanisms to connect/disconnect"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Work in progress")),(0,a.kt)("h2",{id:"datasets--algorithms--resource-governance--sovereignty"},"Datasets / algorithms / resource governance \u2013 sovereignty"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Work in progress")),(0,a.kt)("h2",{id:"security--risks"},"Security & Risks"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Work in progress")))}k.isMDXComponent=!0},11748:function(e,t,i){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=11748}}]);
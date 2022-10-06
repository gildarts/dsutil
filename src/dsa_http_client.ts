export class DSAHttpClient {
  /** TODO: 需要優化可靠度。 */
  public static async post(url: string, xmlString?: string) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/xml',
        },
        body: xmlString,
      });
      let xmlStrRsp = await response.text();

      return { body: xmlStrRsp };
    } catch (error) {
      console.error(error);
      console.log(`fetch 炸了!fetch 炸了!fetch 炸了!${url}`);
      console.log(xmlString);
      return { body: {} };
    }
  }

  public static async get(url: string) {
    return fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (rsp) {
        return { body: rsp };
      });
  }
}

// const url = 'http://devg.ischool.com.tw:8080/dsa/dev.sh_d/admin/UDSManagerService.ExportContract?stt=basic&username=admin&password=1campus12%23%24&body=%3CRequest%3E%20%3CContractName%3E1campus.mobile.v2.student%3C/ContractName%3E%3C/Request%3E';

// HttpClient.get(url).then(rsp => {
//     console.log(rsp);
// });

// const body = `
// <Envelope>
// 	<Header>
// 		<TargetService>UDSManagerService.ExportContract</TargetService>
// 		<TargetContract>admin</TargetContract>
// 		<SecurityToken Type="Basic">
//             <UserName>admin</UserName>
//             <Password>1campus12#$</Password>
// 		</SecurityToken>
// 	</Header>
// 	<Body>
// 		<Request>
// 			<ContractName>1campus.mobile.v2.student</ContractName>
// 		</Request>
// 	</Body>
// </Envelope>
// `

// HttpClient.post("http://devg.ischool.com.tw:8080/dsa/dev.sh_d", body).then(rsp => {
//     console.log(rsp);
// }, err => {
//     console.log(err);
// })

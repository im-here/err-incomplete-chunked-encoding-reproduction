import { request } from "@/service";


export function testApi() {
    return request({
        url: `test`,
        method: "get",
    });
}
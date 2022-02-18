import {TonClient} from "@eversdk/core";
import {libWeb, libWebSetup} from "@eversdk/lib-web";

if(!window.Buffer)
	window.Buffer = Buffer;

if(!window.tonclientWeb){
	window.tonclientWeb = {TonClient, libWeb, libWebSetup};
}

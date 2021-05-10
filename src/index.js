import {TonClient} from "@tonclient/core";
import {libWeb, libWebSetup} from "@tonclient/lib-web";

if(!window.Buffer)
	window.Buffer = Buffer;

if(!window.tonclientWeb){
	window.tonclientWeb = {TonClient, libWeb, libWebSetup};
}

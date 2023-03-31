import * as obsidian from 'obsidian';
import {Plugin} from 'obsidian';

export default class ObsidianToWindow extends Plugin {

	async onload() {
		(window["obsidianAPI"] = obsidian) && this.register(() => delete window["obsidianAPI"]);
	}

}

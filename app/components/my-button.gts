import Component from "@glimmer/component";
import stuff from "ember-test-embroider/lib/stuff";
import Icon from "./icon";

export interface MyButtonSignature {
    Blocks: {
        default: [];
    };
}

export default class MyButton extends Component<MyButtonSignature> {
    constructor() {
      super(...arguments);
      console.log(stuff());
    }

    <template>
        <button type="button">{{yield}} <Icon></Icon></button>
    </template>
}

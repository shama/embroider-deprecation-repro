import Component from "@glimmer/component";

export interface IconSignature {
    Blocks: {
        default: [];
    };
}

export default class Icon extends Component<IconSignature> {
    <template>
        <i>icon{{yield}}</i>
    </template>
}

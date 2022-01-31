import React from "react"

interface IState {
	gamepad: Gamepad | null
}

type Props = Record<string, unknown>

export class GamepadPage extends React.Component<Props, IState> {
	constructor(props: Props) {
		super(props)
		this.state = {
			gamepad: null
		}
	}

	componentDidMount(): void {
		this.setState({
			gamepad: window.navigator.getGamepads()[0] ?? null,
		})
	}

	render(): JSX.Element {
		return (
			<section>
				{this.state.gamepad && <div>
					<p>Got gamepad: {this.state.gamepad.id}</p>
				</div>}
			</section>
		)
	}
}

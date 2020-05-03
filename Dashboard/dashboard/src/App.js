import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
export default class App extends Component {
	componentDidMount() {
		this.updateCode();
	}
	updateCode = () => {
		axios.get('http://localhost:3000/update').then(({ data }) => {
			if (data.latestInfo != this.state.latestInfo) {
				this.setState({ colorFont: { backgroundColor: '#e43f5a', color: '#fff' } });
				setTimeout(() => {
					this.setState({ colorFont: { color: '#e43f5a', backgroundColor: '#fff' } });
				}, 750);
			}
			this.setState({ ...data });
		});
		setTimeout(this.updateCode, 5000);
	};
	constructor(props) {
		super(props);
		this.state = {
			countdown: 7,
			population: 70,
			colorFont: { color: '#e43f5a', backgroundColor: '#fff' },
			latestInfo: 'John just entered the store',
			list: [
				{ name: 'Uz0air', time: '5:00 PM' },
				{ name: 'Uz1air', time: '6:00 PM' },
				{ name: 'Uz2air', time: '7:00 PM' },
				{ name: 'Uz3air', time: '8:00 PM' },
				{ name: 'Uz4air', time: '9:00 PM' },
				{ name: 'Uz5air', time: '10:00 PM' },
				{ name: 'Uz0air', time: '5:00 PM' },
				{ name: 'Uz1air', time: '6:00 PM' },
				{ name: 'Uz2air', time: '7:00 PM' },
				{ name: 'Uz4air', time: '9:00 PM' },
				{ name: 'Uz5air', time: '10:00 PM' },
				{ name: 'Uz3air', time: '8:00 PM' },
				{ name: 'Uz4air', time: '9:00 PM' },
				{ name: 'Uz5air', time: '10:00 PM' }
			]
		};
	}
	render() {
		return (
			<div className="body">
				<div className="body-header">Your local supermarket</div>
				<div className="body-dashboard">
					<div className="body-dashboard_list list">
						{this.state.list.map((item, i) => {
							return (
								<div className="list-item">
									<div className="list-item_number">{i + 1}</div>
									<div className="list-item_info">
										<div className="list-item_name">{item.name}</div>
										<div className="list-item_time">{item.time}</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="body-dashboard_waittime">
						<div className="body-dashboard_waittime-text">
							Approximately <br />
							<span style={{ fontSize: '60px' }}>{this.state.countdown} minutes</span>
							<br /> until the next person can enter
						</div>
						<div>
							People in store: <span style={{ fontWeight: 500 }}>{this.state.population}</span>
						</div>
					</div>
					<div className="body-dashboard_QR">
						<img className="body-dashboard_QR-image" src={require('./qrcode.png')} />
						<div className="body-dashboard_QR-text">Scan the QR code to queue in line</div>
						<div className="body-dashboard_QR-update" style={this.state.colorFont}>
							{this.state.latestInfo}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

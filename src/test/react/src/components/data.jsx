import React from 'react';

export class Data extends React.Component {


render() {
	const title = this.props.text && <div className="card-title">{this.props.text}</div>;

	return 	<div className="card text-white bg-info">
				<div className="card-body">
					{title}
					<p className="card-text">{this.props.number}</p>
				</div>
			</div>;
}


}

/*
 *	  Copyright 2020 Daniel Giribet
 *
 *	 Licensed under the Apache License, Version 2.0 (the "License");
 *	 you may not use this file except in compliance with the License.
 *	 You may obtain a copy of the License at
 *
 *		 http://www.apache.org/licenses/LICENSE-2.0
 *
 *	 Unless required by applicable law or agreed to in writing, software
 *	 distributed under the License is distributed on an "AS IS" BASIS,
 *	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	 See the License for the specific language governing permissions and
 *	 limitations under the License.
 */

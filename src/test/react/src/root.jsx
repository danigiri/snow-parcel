import React from 'react';

/* eslint-disable no-unused-vars */
import { Row } from './components/row';
import { Col } from './components/col';
import { Stuff } from './components/stuff';
import { Data } from './components/data';
import { Data2 } from './components/data2';
import { Data3 } from './components/data3';
import { Data4 } from './components/data4';
import { Data5 } from './components/data5';
import { Keyvalue } from './components/keyvalue';
import { Holderwell } from './components/holderwell';
import { Readonly } from './components/readonly';
/* eslint-enable no-unused-vars */

export function Root() {
	const _root = 
<>
	<Row>
		<Col size="4">
			<Stuff>aaa</Stuff>
			<Data text="foo" number="1"/>
			<Keyvalue key_="key" />
			<Holderwell>
				<Row>
					<Col size="12">
						<Stuff>nested stuff</Stuff>
						<Data3 text="nested stuff" color="a0f"/>
					</Col>
				</Row>
			</Holderwell>
		</Col>
		<Col size="8">
			<Stuff>aaa</Stuff>
			<Data3 text="foo2" color="a0f"/>
			<Data5 text="foox" color="aa0"/>
			<Readonly number="foo" />
		</Col>
	</Row>
</>;
return _root;
}
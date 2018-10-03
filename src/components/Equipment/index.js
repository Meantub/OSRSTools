import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import equipmentImage from '../../../static/img/Equipment_slots.png';

const Equipment = () => (
	<div>
		<img src={equipmentImage} usemap="#image-map"/>

		<map name="image-map">
			<area target="" alt="Cape" title="Cape" href="" coords="51,75,15,39" shape="rect"/>
			<area target="" alt="Body" title="Body" href="" coords="56,78,92,114" shape="rect"/>
			<area target="" alt="Legs" title="Legs" href="" coords="56,118,92,154" shape="rect"/>
			<area target="" alt="Feet" title="Feet" href="" coords="56,158,92,194" shape="rect"/>
			<area target="" alt="Head" title="Head" href="" coords="56,0,92,36" shape="rect"/>
			<area target="" alt="Neck" title="Neck" href="" coords="56,39,92,75" shape="rect"/>
			<area target="" alt="Shield" title="Shield" href="" coords="112,78,148,114" shape="rect"/>
			<area target="" alt="Ammunition" title="Ammunition" href="" coords="97,39,133,75" shape="rect"/>
			<area target="" alt="Weapon" title="Weapon" href="" coords="0,78,36,114" shape="rect"/>
			<area target="" alt="Hands" title="Hands" href="" coords="0,158,36,194" shape="rect"/>
			<area target="" alt="Ring" title="Ring" href="" coords="112,158,148,194" shape="rect"/>
		</map>
	</div>
);

export default Equipment;

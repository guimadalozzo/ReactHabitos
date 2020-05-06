import React from 'react';
import { Text, ScrollView } from 'react-native';
import HabitosList from '../components/HabitosList';

import habitosJson from '../../habitos.json';

export default class HabitosPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            habitos: []
        };
    }

    componentDidMount() {
        this.setState({ 
            habitos: habitosJson
        });
    }

    render() {
        return (
            <ScrollView>
                <HabitosList habitos={ this.state.habitos } />
            </ScrollView>
        );
  }
}


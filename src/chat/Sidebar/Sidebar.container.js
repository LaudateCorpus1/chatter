import { connect } from 'react-redux'
import SidebarComponent from './Sidebar'

export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent);
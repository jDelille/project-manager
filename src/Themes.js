import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
	background: '#E4E4E7',
	secondary: '#ECECEE',
	hover: '#F8F8FF',
	color: '#242424',
	filter: '#999',
	border: '1px solid #999',
};

export const darkTheme = {
	background: '#16171B',
	secondary: '#222327',
	hover: '#4F4F4F',
	color: '#F9F9F9',
	filter: '#999',
	border: '1px solid #999',
};

export const GlobalStyles = createGlobalStyle`

.container,
.page-content,
.sidebar,
.shrink-sidebar,
.page-header,
html,
a {
 background-color: ${(props) => props.theme.background};
 color: ${(props) => props.theme.color};
}

.project-list a,
.project-summary,
.project-comments li,
textarea,
input,
.css-319lph-ValueContainer,
.css-1s2u09g-control,
.css-1hb7zxy-IndicatorsContainer,
.react-select-35-listbox{
 background-color: ${(props) => props.theme.secondary};
 color: ${(props) => props.theme.color};
}

.btn {
	background-color: ${(props) => props.theme.secondary};
 color: ${(props) => props.theme.color};
	border: ${(props) => props.theme.border};
}

.btn:hover {
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.color};

}

.project-list a:hover,
a:hover  {
 background-color: ${(props) => props.theme.hover};
 color: ${(props) => props.theme.color};
}

.project-filter button {
 color: ${(props) => props.theme.filter};
	border-right: ${(props) => props.theme.borderRight};

}

.project-filter button.active {
 color: ${(props) => props.theme.color};

}
`;

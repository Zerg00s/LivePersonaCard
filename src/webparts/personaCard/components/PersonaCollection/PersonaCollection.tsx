import * as React from 'react';
import PropTypes from 'prop-types';

import SPFxPeopleCard, { IPeopleCardProps } from './../SPFxPeopleCard/SPFxPeopleCard';
import { PersonaSize, PersonaInitialsColor } from 'office-ui-fabric-react';

const propTypes = {};
const defaultProps = {};


export default class PersonaCollection extends React.Component<any> {
    constructor(props) {
        super(props);
    }

    public render() {
        const currentUserProps = {
            primaryText: this.props.context.pageContext.user.displayName,
            email: this.props.context.pageContext.user.email ? this.props.context.pageContext.user.email : this.props.context.pageContext.user.loginName,
            serviceScope: this.props.context.serviceScope,
            class: 'persona-card',
            size: PersonaSize.small,
            initialsColor: PersonaInitialsColor.darkBlue,
            // moreDetail: this.personaDetail(), /* pass react element */
            moreDetail: '<div>Details</div>', /* pass html string */
            onCardOpenCallback: () => {
                console.log('WebPart', 'on card open callaback');
            },
            onCardCloseCallback: () => {
                console.log('WebPart', 'on card close callaback');
            }
        };

        const user2Props = { ...currentUserProps };
        currentUserProps.email = "QA@zergs.onmicrosoft.com";
        currentUserProps.primaryText = "QA";
        
        const user3Props = { ...currentUserProps };
        currentUserProps.email = "bo@zergs.onmicrosoft.com";
        currentUserProps.primaryText = "Bo Jackson";
        return (
            <React.Fragment>
                <SPFxPeopleCard {...currentUserProps} />
                <SPFxPeopleCard {...user2Props} />
                <SPFxPeopleCard {...user3Props} />
            </React.Fragment>
        );
    }
}



// const currentUserProps = {  
//     primaryText: this.context.pageContext.user.displayName,
//     email: this.context.pageContext.user.email ? this.context.pageContext.user.email : this.context.pageContext.user.loginName,
//     serviceScope: this.context.serviceScope,
//     class: 'persona-card',
//     size: PersonaSize.regular,
//     initialsColor: PersonaInitialsColor.darkBlue,
//     // moreDetail: this.personaDetail(), /* pass react element */
//     moreDetail: '<div>detail1 <br/> detail2</div>', /* pass html string */
//     onCardOpenCallback: ()=>{
//       console.log('WebPart','on card open callaback');
//     },
//     onCardCloseCallback: ()=>{
//       console.log('WebPart','on card close callaback');
//     }
//   };

//   const Element1: React.ReactElement<IPeopleCardProps> = React.createElement(
//     SPFxPeopleCard, currentUserProps
//   );
//   const user2Props = currentUserProps;
//   currentUserProps.email = "QA@zergs.onmicrosoft.com";
//   currentUserProps.primaryText = "QA";
//   currentUserProps.primaryText = "QA";
//   const Element2: React.ReactElement<IPeopleCardProps> = React.createElement(
//     SPFxPeopleCard, user2Props
//   );
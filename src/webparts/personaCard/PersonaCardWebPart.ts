import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Log } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import { PersonaSize, PersonaInitialsColor } from 'office-ui-fabric-react';
import PersonaCollection from './components/PersonaCollection/PersonaCollection';

import * as strings from 'PersonaCardWebPartStrings';

import { IPersonaCardProps } from './components/IPersonaCardProps';

export interface IPersonaCardWebPartProps {
  description: string;
}

export default class PersonaCardWebPart extends BaseClientSideWebPart<IPersonaCardWebPartProps> {

  public render(): void {
    

    const PersonaCollectionElement = React.createElement(
      PersonaCollection, {context: this.context}
    );

    ReactDom.render(PersonaCollectionElement, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

import {Component} from 'react'
import {
  MainContainer,
  Container,
  FormContainer,
  Heading,
  LabelElement,
  InputElement,
  GenerateButton,
  MemeContainer,
  TextElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    fontSize: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    allDetailsGiven: false,
  }

  onChangingImage = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangingTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangingBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangingFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onClickingGenerateButton = event => {
    event.preventDefault()

    const {imageUrl, topText, bottomText} = this.state

    return imageUrl !== '' && topText !== '' && bottomText !== ''
      ? this.setState({allDetailsGiven: true})
      : this.setState({allDetailsGiven: false})
  }

  render() {
    const {
      fontSize,
      imageUrl,
      topText,
      bottomText,
      allDetailsGiven,
    } = this.state
    console.log(this.state)

    return (
      <MainContainer>
        <Container>
          <FormContainer onSubmit={this.onClickingGenerateButton}>
            <Heading>Meme Generator</Heading>

            {allDetailsGiven && (
              <MemeContainer
                imageUrl={imageUrl}
                fontSize={fontSize}
                mobile
                data-testid="meme"
              >
                <TextElement>{topText}</TextElement>
                <TextElement>{bottomText}</TextElement>
              </MemeContainer>
            )}

            <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
            <InputElement
              id="imageUrl"
              placeholder="Enter the Image Url"
              value={imageUrl}
              onChange={this.onChangingImage}
            />
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <InputElement
              id="topText"
              placeholder="Enter the Top Text"
              value={topText}
              onChange={this.onChangingTopText}
            />
            <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
            <InputElement
              id="bottomText"
              placeholder="Enter the Bottom Text"
              value={bottomText}
              onChange={this.onChangingBottomText}
            />
            <LabelElement htmlFor="fontSize">Font Size</LabelElement>
            <InputElement
              as="select"
              id="fontSize"
              value={fontSize}
              onChange={this.onChangingFontSize}
            >
              {fontSizesOptionsList.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </InputElement>
            <GenerateButton type="submit">Generate</GenerateButton>
          </FormContainer>
          {allDetailsGiven && (
            <MemeContainer imageUrl={imageUrl}>
              <TextElement as="p" fontSize={fontSize}>
                {topText}
              </TextElement>
              <TextElement as="p" fontSize={fontSize}>
                {bottomText}
              </TextElement>
            </MemeContainer>
          )}
        </Container>
      </MainContainer>
    )
  }
}

export default MemeGenerator

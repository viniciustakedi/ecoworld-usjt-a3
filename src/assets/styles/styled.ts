import { CreateArrayWithLengthX, NumericRange } from '../../utils/rangeNumber';
import styled from "styled-components";

// {===----===----===----===[ Container ]===----===----===----===}

interface ContainerProps {
    paddingLeft?: number
    paddingRight?: number
    paddingTop?: number
    paddingBottom?: number
    paddingTopMenu?: number
    maxWidthMenu?: number
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: ${(props) => props.paddingLeft || '0'}rem;
    padding-right: ${(props) => props.paddingRight || '0'}rem;
    padding-top: ${(props) => props.paddingTop || '0'}rem;
    padding-bottom: ${(props) => props.paddingBottom || '0'}rem;

    @media(max-width: 980px) {
        padding-left: ${(props) => props.paddingLeft ? props.paddingLeft - 2 : '0'}rem;
        padding-right: ${(props) => props.paddingRight ? props.paddingRight - 2 : '0'}rem;
    }
    
    @media(max-width: ${(props) => props.maxWidthMenu || 935}px) {
        padding-top: ${(props) => props.paddingTopMenu || '0'}rem;
    }
    
    @media(max-width: 710px) {
        padding-left: ${(props) => props.paddingLeft ? 2 : '0'}rem;
        padding-right: ${(props) => props.paddingRight ? 2 : '0'}rem;
    }

    @media(max-width: 335px) {
        padding-left: ${(props) => props.paddingLeft ? 1 : '0'}rem;
        padding-right: ${(props) => props.paddingRight ? 1 : '0'}rem;
    }
`
// {===----===----===----===[ Box ]===----===----===----===}

interface BoxProps {
    width?: NumericRange<CreateArrayWithLengthX<0>, 100>,
    shadowColor?: string,
}

export const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: colunm;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 4px 2px ${(props) => props.shadowColor || '#00000015'};
    border-radius: 5px;
    width: ${(props) => props.width || 95}%;
    height: 20rem;
`

export const GreenSpan = styled.span`
    color: #62a500;
`
// {===----===----===----===[ Title ]===----===----===----===}

interface TextProps {
    color?: string,
    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,
    marginTop?: number,
    fontSize?: 'small' | 'default' | 'big',
    textAlign?: 'center' | 'end' | 'start' | 'justify' | 'left' | 'right',
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'bold',
}

enum FontSize {
    'small' = '1.5rem',
    'default' = '2.5rem',
    'big' = '3rem',
}

export const Title = styled.h1<TextProps>`
    font-size: ${(props) => props.fontSize ? FontSize[props.fontSize] : FontSize.default};
    color: ${(props) => props.color || '#fff'};
    padding-left: ${(props) => props.paddingLeft || '0'}rem;
    padding-right: ${(props) => props.paddingRight || '0'}rem;
    padding-top: ${(props) => props.paddingTop || '0'}rem;
    padding-bottom: ${(props) => props.paddingBottom || '0'}rem;
    text-shadown: 2px 2px 4px 4px #00000044;
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 700}};
`;

// {===----===----===----===[ Text ]===----===----===----===}

enum TextFontSize {
    'small' = '.875rem',
    'default' = '1.125rem',
    'big' = '1.375rem',
}

export const Text = styled.p<TextProps>`
    font-size: ${(props) => props.fontSize ? TextFontSize[props.fontSize] : TextFontSize.default};
    color: ${(props) => props.color || '#fff'};
    margin-top: ${(props) => props.marginTop || '0'}rem;
    padding-left: ${(props) => props.paddingLeft || '0'}rem;
    padding-right: ${(props) => props.paddingRight || '0'}rem;
    text-shadown: 2px 2px 4px 4px #00000044;
    text-align: ${(props) => props.textAlign || 'initial'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 400}};
`;

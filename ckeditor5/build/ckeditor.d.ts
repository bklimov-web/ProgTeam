/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { BalloonEditor } from "@ckeditor/ckeditor5-editor-balloon";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Autosave } from "@ckeditor/ckeditor5-autosave";
import {
  Bold,
  Code,
  Italic,
  Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { CodeBlock } from "@ckeditor/ckeditor5-code-block";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { FindAndReplace } from "@ckeditor/ckeditor5-find-and-replace";
import {
  FontBackgroundColor,
  FontColor,
  FontSize,
} from "@ckeditor/ckeditor5-font";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import {
  AutoImage,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link } from "@ckeditor/ckeditor5-link";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { RemoveFormat } from "@ckeditor/ckeditor5-remove-format";
import {
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersLatin,
  SpecialCharactersText,
} from "@ckeditor/ckeditor5-special-characters";
import {
  Table,
  TableCellProperties,
  TableProperties,
  TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { BlockToolbar } from "@ckeditor/ckeditor5-ui";

declare class Editor extends BalloonEditor {
  static builtinPlugins: (
    | typeof Alignment
    | typeof AutoImage
    | typeof AutoLink
    | typeof Autoformat
    | typeof Autosave
    | typeof BlockQuote
    | typeof BlockToolbar
    | typeof Bold
    | typeof CloudServices
    | typeof Code
    | typeof CodeBlock
    | typeof Essentials
    | typeof FindAndReplace
    | typeof FontBackgroundColor
    | typeof FontColor
    | typeof FontSize
    | typeof Highlight
    | typeof HorizontalLine
    | typeof Image
    | typeof ImageCaption
    | typeof ImageResize
    | typeof ImageStyle
    | typeof ImageToolbar
    | typeof ImageUpload
    | typeof Indent
    | typeof Italic
    | typeof Link
    | typeof List
    | typeof ListProperties
    | typeof MediaEmbed
    | typeof Paragraph
    | typeof PasteFromOffice
    | typeof RemoveFormat
    | typeof SpecialCharacters
    | typeof SpecialCharactersArrows
    | typeof SpecialCharactersLatin
    | typeof SpecialCharactersText
    | typeof Table
    | typeof TableCellProperties
    | typeof TableProperties
    | typeof TableToolbar
    | typeof TextTransformation
    | typeof Underline
  )[];
  static defaultConfig: {
    toolbar: {
      items: string[];
    };
    language: string;
    blockToolbar: string[];
    image: {
      toolbar: string[];
    };
    table: {
      contentToolbar: string[];
    };
  };
}
export default Editor;

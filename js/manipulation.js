// JavaScript Document
/* Global variables fo different element nodes of HTML document. */
var sectionElemNode;
var articleHeadElemNode;
var secondParagraphElemNode;
var instructionHeadElemNode;
var footerElemNode;

/* Enumeration for shaded yellow colors for different items with which we are interacting. */
var BackgroundColor = {
    ARTICLE_HEADING     : "#E4E10B",
    SECOND_PARAGRAPGH   : "#B8B508",
    INSTRUCTION_HEADING : "#F7F441",
    FOOTER              : "#B5B34C"
}

/* Enumeration for different indeces of HTML tags within section tag. */
var Index = {
    ARTICLE_HEADING     :   1,
    SECOND_PARAGRAPGH   :   3,
    INSTRUCTION_HEADING :   6,
    PAGE_TITLE          :   0
};

window.onload = init;

function init( ){
	//this function runs after the page loads
    sectionElemNode = document.querySelector(".main");
    articleHeadElemNode = sectionElemNode.children[Index.ARTICLE_HEADING];
    secondParagraphElemNode = sectionElemNode.children[Index.SECOND_PARAGRAPGH];
	instructionHeadElemNode = sectionElemNode.children[Index.INSTRUCTION_HEADING];
	footerElemNode = document.querySelector(".footer > p");

	//Add listener for click on the Article Heading
    articleHeadElemNode.onclick = stepTwo;
}

function stepTwo( ){
	//this function runs when the user clicks on the Article heading
    console.log("Article Heading has been clicked");

    /* Change the background color of article heading element. */
    articleHeadElemNode.style.backgroundColor = BackgroundColor.ARTICLE_HEADING;

	//Add listener for mouseover the second paragraph on the page
	secondParagraphElemNode.onmouseover = stepThree;
}

function stepThree( ){
	//this function runs when the user mouses over the second paragraph
    console.log("User mouseover second paragraph");

    /* Change the background color of 2nd paragraph element. */
    secondParagraphElemNode.style.backgroundColor = BackgroundColor.SECOND_PARAGRAPGH;

	//Add listener for mouseout on the Instructions heading
    instructionHeadElemNode.onmouseout = stepFour;
}

function stepFour( ){
	//this function runs when the user mouses out of the Instructions heading
    console.log("User mouseout of instruction heading");

    /* Change the background color of heading instruction element.*/
    instructionHeadElemNode.style.backgroundColor = BackgroundColor.INSTRUCTION_HEADING;

	//Add listener for click on the paragraph in the footer
    footerElemNode.onclick = complete;
}

function complete( ){
	//this runs after the user clicks on the paragraph in the footer
    console.log("footer paragraph has been clicked");

    /* Change background color of footer element*/
    footerElemNode.style.backgroundColor = BackgroundColor.FOOTER;

    sectionElemNode.children[Index.PAGE_TITLE].childNodes[0].nodeValue = "Congratulations. Complete.";
}

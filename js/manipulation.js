// JavaScript Document
/* Global variables fo different element nodes of HTML document. */
var sectionElemNode;
var articleHeadElemNode;
var secondParagraphElemNode;
var instructionHeadElemNode;
var footerElemNode;

/* Enumeration for different indeces of HTML tags within section tag. */
var Index = {
    ARTICLE_HEADING     :   1,
    SECOND_PARAGRAPGH   :   3,
    INSTRUCTION_HEADING :   7
};

window.onload = init;

function init( ){
	//this function runs after the page loads
    sectionElemNode = document.querySelector(".main");
    articleHeadElemNode = sectionElemNode.children[Index.ARTICLE_HEADING];
    secondParagraphElemNode = sectionElemNode.children[Index.SECOND_PARAGRAPGH];
	instructionHeadElemNode = sectionElemNode.children[Index.INSTRUCTION_HEADING];
	footerElemNode = document.querySelector(".footer");

	//Add listener for click on the Article Heading
    articleHeadElemNode.onclick = stepTwo;
}

function stepTwo( ){
	//this function runs when the user clicks on the Article heading
    console.log("Article Heading has been clicked");

	//Add listener for mouseover the second paragraph on the page
	secondParagraphElemNode.onmouseover = stepThree;
}

function stepThree( ){
	//this function runs when the user mouses over the second paragraph
    console.log("User mouseover second paragraph");

	//Add listener for mouseout on the Instructions heading
    instructionHeadElemNode.onmouseout = stepFour;
}

function stepFour( ){
	//this function runs when the user mouses out of the Instructions heading
    console.log("User mouseout of instruction heading");

	//Add listener for click on the paragraph in the footer
    footerElemNode.onclick = complete;
}

function complete( ){
	//this runs after the user clicks on the paragraph in the footer
    console.log("footer paragraph has been clicked");
}

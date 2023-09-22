$(document).ready(function() {
    // Function to handle article click
    function handleArticleClick(event) {
        // Remove the "big" class from all articles
        $('.article').removeClass('big');
      
        // Add the "big" class to the clicked article
        $(event.currentTarget).addClass('big');
      }
      
      // Add a click event listener to each article
      $('.article').click(handleArticleClick);
      
      // Your existing code for smooth scrolling and scrollspy here...
});
  

    document.addEventListener('DOMContentLoaded', function() {
        const searchIcon = document.getElementById('searchIcon');
        const searchBar = document.querySelector('.search-bar');

        searchIcon.addEventListener('click', function() {
            searchBar.style.display = 'block';
        });
    });
    document.getElementById('searchIcon').addEventListener('click', function() {
        document.getElementById('searchForm').classList.toggle('d-block');
      });
  
    
      document.getElementById('offcanvasNavbar').addEventListener('show.bs.offcanvas', function () {
        document.getElementById('navItems').classList.add('toggle-white');
        document.getElementById('searchForm').classList.add('toggle-white');
      });
      document.getElementById('offcanvasNavbar').addEventListener('hide.bs.offcanvas', function () {
        document.getElementById('navItems').classList.remove('toggle-white');
        document.getElementById('searchForm').classList.remove('toggle-white');
      });
  
      document.addEventListener('DOMContentLoaded', function() {
        var myOffcanvas = document.getElementById('offcanvasNavbar');
        var searchIcon = document.getElementById('searchIcon');
    
        myOffcanvas.addEventListener('show.bs.offcanvas', function() {
            searchIcon.classList.add('toggle-white');
        });
    
        myOffcanvas.addEventListener('hidden.bs.offcanvas', function() {
            searchIcon.classList.remove('toggle-white');
        });
    });
    
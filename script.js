let editingPostId = null; // Variable pour stocker l'ID du post en cours d'édition

// Fonction pour charger les posts depuis l'API
async function loadPosts() {
  try {
    const response = await fetch("http://localhost:5000/post");
    const posts = await response.json();
    const postsList = document.getElementById("postsList");
    postsList.innerHTML = ""; // Vider la liste actuelle

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML = `
                <p><strong>${post.author}</strong>: ${post.message}</p>
                <button onclick="editPost('${post._id}', '${post.message}', '${post.author}')">Modifier</button>
                <button onclick="deletePost('${post._id}')">Supprimer</button>
            `;
      postsList.appendChild(postDiv);
    });
  } catch (error) {
    console.error("Erreur lors du chargement des posts :", error);
  }
}

// Fonction pour supprimer un post
async function deletePost(postId) {
  try {
    const response = await fetch(`http://localhost:5000/post/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Recharger les posts après la suppression
      loadPosts();
    } else {
      console.error("Erreur lors de la suppression du post");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du post :", error);
  }
}

// Fonction pour préparer l'édition d'un post
function editPost(postId, message, author) {
  editingPostId = postId; // Stocker l'ID du post à modifier
  document.getElementById("message").value = message; // Remplir le champ message
  document.getElementById("author").value = author; // Remplir le champ auteur
}

// Écouteur d'événements pour le formulaire
document
  .getElementById("postForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = document.getElementById("message").value;
    const author = document.getElementById("author").value;

    try {
      const method = editingPostId ? "PUT" : "POST"; // Choisir la méthode en fonction de l'édition
      const url = editingPostId
        ? `http://localhost:5000/post/${editingPostId}`
        : "http://localhost:5000/post";

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, author }),
      });

      if (response.ok) {
        document.getElementById("message").value = ""; // Vider le champ message
        document.getElementById("author").value = ""; // Vider le champ auteur
        editingPostId = null; // Réinitialiser l'ID de l'édition
        loadPosts(); // Recharger les posts après ajout ou mise à jour
      } else {
        console.error("Erreur lors de l'ajout ou de la modification du post");
      }
    } catch (error) {
      console.error(
        "Erreur lors de l'ajout ou de la modification du post :",
        error
      );
    }
  });

// Chargement initial des posts
loadPosts();

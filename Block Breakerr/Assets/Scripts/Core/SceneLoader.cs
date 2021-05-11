using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneLoader : MonoBehaviour { 
    public void LoadNextScene() {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
    }
    public void LoadNextScene(int index) {
        SceneManager.LoadScene(index);
    }
    public void LoadNextScene(string scene) {
        SceneManager.LoadScene(scene);
    }
    public void ReloadScene() {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void LoadNextSceneDelay(float delay) { 
        StartCoroutine(LoadScene(SceneManager.GetActiveScene().buildIndex + 1, delay)); 
    }

    public void QuitGame() {
        Application.Quit();
    }

    public void QuitGameDelay(float delay) {
        StartCoroutine(Quit(delay));
    }

    private IEnumerator Quit(float delay) {
        yield return new WaitForSeconds(delay);
        Application.Quit();
    }

    private IEnumerator LoadScene(int scene, float delay) {
        yield return new WaitForSeconds(delay);
        SceneManager.LoadScene(scene);
    }
}

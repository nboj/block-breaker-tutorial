using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Block : MonoBehaviour {
    [SerializeField] float animationDeathDelay = 0.1f;
    [SerializeField] float particlesDeathDelay = 1f;
    [SerializeField] ParticleSystem deathVFX;
    [SerializeField] Sprite[] sprites;
    private int index = 0;
    private Level level;
    private Animator animator; 
    private SpriteRenderer spriteRenderer;
    private void Start() {
        level = FindObjectOfType<Level>();
        animator = GetComponent<Animator>();
        spriteRenderer = GetComponent<SpriteRenderer>();
        level.Blocks++;
    }
    private void OnCollisionEnter2D(Collision2D collision) {
        if (index >= sprites.Length)
            StartCoroutine(Death());
        else {
            StartCoroutine(Hit());
        }
    }
    private IEnumerator Hit() {
        spriteRenderer.sprite = sprites[index];
        index++;
        yield return new WaitForSeconds(1f);
    }
    private IEnumerator Death() { 
        level.Blocks--;
        GetComponent<Collider2D>().enabled = false;
        animator.SetTrigger("Death");
        yield return new WaitForSeconds(animationDeathDelay);
        var particles = Instantiate(deathVFX, transform);
        level.CheckBlockCount();
        yield return new WaitForSeconds(particlesDeathDelay);
        Destroy(particles.gameObject);
        Destroy(gameObject);
    }
}

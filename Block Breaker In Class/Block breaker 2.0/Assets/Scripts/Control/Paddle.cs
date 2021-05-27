using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{
    [SerializeField] float moveSpeed = 5f;
    [SerializeField] bool autoPlay = false;
    private Ball ball;
    // Start is called before the first frame update
    void Start()
    {
        ball = FindObjectOfType<Ball>();        
    }

    // Update is called once per frame
    void Update()
    {
        if (!autoPlay) {
            float xposition = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;   
            transform.position = new Vector3(Mathf.Clamp(xposition + transform.position.x, -6.5f, 6.5f), transform.position.y, transform.position.z);
        } else {
            transform.position = new Vector3(ball.transform.position.x, transform.position.y, 0);
        }
    }
}   

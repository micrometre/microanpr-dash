.PHONY: run
flask_start:
	flask run --host=0.0.0.0 --debug
ffmpeg_serve:
	 ffmpeg -i alprVideo_1.mp4 -listen 1 -f mp4 -movflags frag_keyframe+empty_moov http://192.168.1.122:5001

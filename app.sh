# Show menu to select the app to run

echo "\033[1;32mSelect the app to run\033[0m"
select app in "Run DEV" "Setup" "Build" "Docker Image" "Exit"
do
	case $app in
	"Run DEV")
	echo "\033[1;32mRunning DEV app\033[0m"
		sh cmd/dev.sh
		break
		;;
	"Setup")
	echo "\033[1;32mRunning SETUP app\033[0m"
		sh cmd/setup.sh
		;;
	"Exit")
		echo "Exiting..."
		sh app.sh
		break
		;;
	"Build")
	echo "\033[1;32mRunning BUILD app\033[0m"
		sh cmd/build.sh
		;;
	"Docker Image")
	echo "\033[1;32mRunning Docker app\033[0m"
		sh cmd/docker.sh
		;;
	*)
		# Return to the main menu
		echo "Invalid option $REPLY"
		sh app.sh
		break
	;;

	esac
done
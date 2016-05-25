class EventsController < ApplicationController

  def index
    @events = Event.all
    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @events }
    end
  end

  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html  # show.html.erb
      format.json  { render :json => @event }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:name, :id)
    end
end

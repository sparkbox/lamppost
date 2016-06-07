require_relative "../models/topic"
require_relative "../models/day"
require_relative "../models/time"
require_relative "../models/frequency"
class EventsController < ApplicationController

  def index
    @events = Event.all

    # if params[:topics] || params[:times] || params[:days] || params[:frequencies]
    #   @events = Event.tagged_with(params[:topics]||params[:times] || params[:days] ||params[:frequencies], :any => true)
    # end
    @topics = Topic.tag_data(params[:topics])
    @days  = Day.tag_data(params[:days])
    @times = Time.tag_data(params[:times])
    @frequencies  = Frequency.tag_data(params[:frequencies])

    respond_to do |format|
      format.html  { expires_in 1.day, :public => true } # index.html.erb
      format.json  { render :json => @events }
      format.rss { render :layout => false }
    end
  end

  def show
    @event = Event.find(params[:id])

    respond_to do |format|
      format.html  { expires_in 1.year, :public => true } # show.html.erb
      format.json  { render :json => @event }
      format.png {
        expires_in 1.year, :public => true
        send_data Base64.decode64(@event.image_binary), :type => @event.image_content_type, :disposition => 'inline'
      }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:name, :id, :topic_list, :time_list, :day_list, :frequency_list)
    end
end
